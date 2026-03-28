const { test } = require('@playwright/test');
const fs = require('fs');

// Funzione per scrivere i dati nel file CSV
function salvaRisultato(localita, durata) {
  const dataora = new Date().toISOString();
  const riga = `${dataora},${localita},${durata}\n`;
  // Scrive fisicamente il file nel server di GitHub
  fs.appendFileSync('performance_log.csv', riga);
}

// --- TEST ANDORA (1 GIORNO) ---
test('Ricerca 1 Giorno (Andora)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=3&from_date=2026-07-01&to_date=2026-07-01';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  
  // Aspetta che appaia almeno una spiaggia
  await page.waitForSelector('.property-box', { timeout: 30000 });
  
  const durata = (Date.now() - start) / 1000;
  console.log(`ANDORA_1_GIORNO: ${durata}s`);
  salvaRisultato('Andora_1_Giorno', durata); // <--- QUESTA RIGA SALVA NEL CSV
});

// --- TEST ANDORA (3 GIORNI) ---
test('Ricerca 3 Giorni (Andora)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=3&from_date=2026-07-01&to_date=2026-07-03';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.property-box', { timeout: 30000 });
  
  const durata = (Date.now() - start) / 1000;
  console.log(`ANDORA_3_GIORNI: ${durata}s`);
  salvaRisultato('Andora_3_Giorni', durata);
});

// --- TEST ALASSIO (2 GIORNI) ---
test('Ricerca 2 Giorni (Alassio)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=1&from_date=2026-07-18&to_date=2026-07-19';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.property-box', { timeout: 30000 });
  
  const durata = (Date.now() - start) / 1000;
  console.log(`ALASSIO_2_GIORNI: ${durata}s`);
  salvaRisultato('Alassio_2_Giorni', durata);
});

// --- TEST BONASSOLA (1 GIORNO) ---
test('Ricerca 1 Giorno (Bonassola)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=53&from_date=2026-08-05&to_date=2026-08-05';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.property-box', { timeout: 30000 });
  
  const durata = (Date.now() - start) / 1000;
  console.log(`BONASSOLA_1_GIORNO: ${durata}s`);
  salvaRisultato('Bonassola_1_Giorno', durata);
});
