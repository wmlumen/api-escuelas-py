// Script de prueba simple para verificar que la API funciona localmente
// Ejecutar con: node api/test.js

import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3000';

async function testAPI() {
  console.log('\n🧪 Iniciando pruebas de API...\n');

  const tests = [
    {
      name: 'Info de años disponibles',
      url: `${BASE_URL}/api/anos`,
      expectedStatus: 200
    },
    {
      name: 'Obtener establecimientos 2023',
      url: `${BASE_URL}/api/establecimientos?anio=2023&limit=5`,
      expectedStatus: 200
    },
    {
      name: 'Filtrar por departamento',
      url: `${BASE_URL}/api/establecimientos?anio=2018&departamento=CENTRAL&limit=5`,
      expectedStatus: 200
    },
    {
      name: 'Obtener departamentos',
      url: `${BASE_URL}/api/departamentos`,
      expectedStatus: 200
    },
    {
      name: 'Año inválido (error esperado)',
      url: `${BASE_URL}/api/establecimientos?anio=2020`,
      expectedStatus: 400
    }
  ];

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    try {
      const response = await fetch(test.url);
      const status = response.status;
      const data = await response.json();

      if (status === test.expectedStatus) {
        console.log(`✅ ${test.name}`);
        console.log(`   URL: ${test.url}`);
        console.log(`   Status: ${status}\n`);
        passed++;
      } else {
        console.log(`❌ ${test.name}`);
        console.log(`   Esperado: ${test.expectedStatus}, Obtenido: ${status}\n`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ ${test.name}`);
      console.log(`   Error: ${error.message}\n`);
      failed++;
    }
  }

  console.log(`📊 Resultados: ${passed} ✅ | ${failed} ❌\n`);

  if (failed === 0) {
    console.log('🎉 ¡Todas las pruebas pasaron!\n');
    process.exit(0);
  } else {
    console.log(`⚠️ ${failed} prueba(s) fallaron\n`);
    process.exit(1);
  }
}

testAPI();
