export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const anosDisponibles = {
      2014: {
        ano: 2014,
        tipo: 'Establecimientos Escolares',
        descripcion: 'Base de datos de establecimientos educativos del año 2014',
        estadisticas: {
          departamentos: 18,
          distritos: 220,
          establecimientos_registrados: 8000,
          institucion_fuente: 'MEC Paraguay'
        },
        fuente_datos: 'https://datos.mec.gov.py',
        disponible: true
      },
      2018: {
        ano: 2018,
        tipo: 'Instituciones Educativas',
        descripcion: 'Base de datos de instituciones educativas del año 2018',
        estadisticas: {
          departamentos: 18,
          distritos: 220,
          instituciones_registradas: 8500,
          institucion_fuente: 'MEC Paraguay'
        },
        fuente_datos: 'https://datos.mec.gov.py',
        disponible: true
      },
      2023: {
        ano: 2023,
        tipo: 'Establecimientos Escolares',
        descripcion: 'Base de datos actualizada de establecimientos educativos del año 2023',
        estadisticas: {
          departamentos: 18,
          distritos: 220,
          establecimientos_registrados: 8800,
          institucion_fuente: 'MEC Paraguay'
        },
        fuente_datos: 'https://datos.mec.gov.py',
        disponible: true
      }
    };

    const parametrosConsulta = {
      anio: {
        tipo: 'number',
        requerido: false,
        default: 2018,
        valores_validos: [2014, 2018, 2023],
        descripcion: 'Año de datos a consultar'
      },
      departamento: {
        tipo: 'string',
        requerido: false,
        descripcion: 'Filtrar por nombre o código de departamento'
      },
      distrito: {
        tipo: 'string',
        requerido: false,
        descripcion: 'Filtrar por nombre o código de distrito'
      },
      nombre: {
        tipo: 'string',
        requerido: false,
        descripcion: 'Filtrar por nombre de institución/establecimiento'
      },
      numero: {
        tipo: 'string',
        requerido: false,
        descripcion: 'Filtrar por código de institución'
      },
      limit: {
        tipo: 'number',
        requerido: false,
        default: 100,
        descripcion: 'Cantidad de resultados por página'
      },
      offset: {
        tipo: 'number',
        requerido: false,
        default: 0,
        descripcion: 'Desplazamiento para paginación'
      }
    };

    res.status(200).json({
      success: true,
      mensaje: 'API de Establecimientos Educativos - Múltiples Años',
      anos_disponibles: anosDisponibles,
      parametros_disponibles: parametrosConsulta,
      ejemplos_uso: {
        ano_especifico: '/api/establecimientos?anio=2014',
        filtro_departamento: '/api/establecimientos?anio=2018&departamento=CENTRAL',
        filtro_zona: '/api/establecimientos?anio=2023&departamento=ITAPUA',
        paginacion: '/api/establecimientos?anio=2014&limit=50&offset=0',
        busqueda_nombre: '/api/establecimientos?anio=2023&nombre=Escuela%20Nacional'
      },
      metadata: {
        endpoint: '/api/establecimientos',
        metodo: 'GET',
        cors_habilitado: true,
        ultima_actualizacion: new Date().toISOString()
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
