export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const url = 'https://datos.mec.gov.py/data/establecimientos_lista.json?form_buscar_establecimientos%5Banio%5D=2023&form_buscar_establecimientos%5Bnombre_zona%5D=&form_buscar_establecimientos%5Bprograma%5D=&form_buscar_establecimientos_codigo_establecimiento=&form_buscar_establecimientos_codigo_establecimiento_id=&form_buscar_establecimientos_direccion=&form_buscar_establecimientos_direccion_id=&form_buscar_establecimientos_nombre_barrio_localidad=&form_buscar_establecimientos_nombre_barrio_localidad_id=&form_buscar_establecimientos_nombre_departamento=&form_buscar_establecimientos_nombre_departamento_id=&form_buscar_establecimientos_nombre_distrito=&form_buscar_establecimientos_nombre_distrito_id=&utf8=%E2%9C%93';

    const response = await fetch(url);
    const data = await response.json();

    // Obtener departamentos únicos
    const departamentos = [...new Set(data.map(item => item.departamento).filter(Boolean))];
    
    // Contar establecimientos por departamento
    const conteo = departamentos.map(depto => ({
      nombre: depto,
      cantidad: data.filter(item => item.departamento === depto).length
    })).sort((a, b) => b.cantidad - a.cantidad);

    res.status(200).json({
      success: true,
      total_departamentos: departamentos.length,
      total_establecimientos: data.length,
      departamentos: conteo
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
