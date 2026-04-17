export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Parámetro de año (default: 2018)
    const { 
      anio = 2018,
      departamento, 
      distrito, 
      nombre, 
      numero, 
      limit = 100,
      offset = 0 
    } = req.query;

    // Validar año soportado
    const aniosValidos = ['2014', '2018', '2023'];
    const anioStr = String(anio);
    
    if (!aniosValidos.includes(anioStr)) {
      return res.status(400).json({
        success: false,
        error: `Año no soportado: ${anio}`,
        anos_disponibles: aniosValidos
      });
    }

    // Construir URL según el año
    let url;
    let dataSource;
    
    if (anioStr === '2014') {
      // Datos de 2014 (establecimientos)
      url = 'https://datos.mec.gov.py/data/establecimientos_lista.json?form_buscar_establecimientos%5Banio%5D=2014&utf8=%E2%9C%93';
      dataSource = 'establecimientos';
    } else if (anioStr === '2018') {
      // Datos de 2018 (instituciones)
      url = 'https://datos.mec.gov.py/data/instituciones_lista.json?form_buscar_instituciones%5Banio%5D=2018&utf8=%E2%9C%93';
      dataSource = 'instituciones';
    } else if (anioStr === '2023') {
      // Datos de 2023 (establecimientos)
      url = 'https://datos.mec.gov.py/data/establecimientos_lista.json?form_buscar_establecimientos%5Banio%5D=2023&utf8=%E2%9C%93';
      dataSource = 'establecimientos';
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al obtener datos del MEC para año ${anio}: ${response.status}`);
    }

    const data = await response.json();

    // Normalizar campos según el año (para compatibilidad)
    let resultados = data.map(item => ({
      ...item,
      // Normalizar campos de nombre
      nombre_institucion: item.nombre_institucion || item.nombre || null,
      codigo_institucion: item.codigo_institucion || item.codigo_establecimiento || null,
      nombre_departamento: item.nombre_departamento || item.departamento || null,
      nombre_distrito: item.nombre_distrito || item.distrito || null,
      anio: parseInt(anioStr)
    }));

    // Aplicar filtros
    if (departamento) {
      resultados = resultados.filter(item => 
        (item.nombre_departamento && item.nombre_departamento.toLowerCase().includes(departamento.toLowerCase())) ||
        (item.codigo_departamento && item.codigo_departamento.toString() === departamento)
      );
    }

    if (distrito) {
      resultados = resultados.filter(item => 
        (item.nombre_distrito && item.nombre_distrito.toLowerCase().includes(distrito.toLowerCase())) ||
        (item.codigo_distrito && item.codigo_distrito.toString() === distrito)
      );
    }

    if (nombre) {
      resultados = resultados.filter(item => 
        item.nombre_institucion && item.nombre_institucion.toLowerCase().includes(nombre.toLowerCase())
      );
    }

    if (numero) {
      resultados = resultados.filter(item => 
        item.codigo_institucion && item.codigo_institucion.toString() === numero.toString()
      );
    }

    // Paginación
    const start = parseInt(offset, 10) || 0;
    const end = start + (parseInt(limit, 10) || 100);
    const paginatedResults = resultados.slice(start, end);

    // Estadísticas por año
    const stats = {
      2014: { departamentos: 18, distritos: 220, establecimientos: 8000 },
      2018: { departamentos: 18, distritos: 220, instituciones: 8500 },
      2023: { departamentos: 18, distritos: 220, establecimientos: 8800 }
    };

    res.status(200).json({
      success: true,
      ano: parseInt(anioStr),
      tipo_dato: dataSource,
      total_encontrados: resultados.length,
      pagina: {
        limit: parseInt(limit, 10) || 100,
        offset: start,
        resultado_inicio: start + 1,
        resultado_fin: Math.min(end, resultados.length),
        total_paginas: Math.ceil(resultados.length / (parseInt(limit, 10) || 100))
      },
      filtros_aplicados: {
        anio: anioStr,
        departamento: departamento || null,
        distrito: distrito || null,
        nombre: nombre || null,
        numero: numero || null
      },
      data: paginatedResults,
      metadata: {
        source: 'MEC Paraguay',
        years_disponibles: ['2014', '2018', '2023'],
        current_year: anioStr,
        estadisticas_ano: stats[anioStr],
        last_update: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      error: 'Error al procesar la solicitud',
      message: error.message
    });
  }
}
