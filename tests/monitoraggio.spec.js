const { test } = require('@playwright/test');
const fs = require('fs');

// Funzione per salvare i dati nel file CSV
function salvaRisultato(localita, durata) {
  const dataora = new Date().toISOString();
  const riga = `${dataora},${localita},${durata}\n`;
  // Se il file non esiste lo crea, altrimenti aggiunge la riga in fondo
  fs.appendFileSync('performance_log.csv', riga);
}

test('Ricerca 1 Giorno (Andora)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=3&from_date=2026-07-01&to_date=2026-07-01';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.property-box', { timeout: 30000 });
  console.log(`ANDORA_1_GIORNO_20260701: ${(Date.now() - start) / 1000}s`);
});

test('Ricerca 3 Giorni (Andora)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=3&from_date=2026-07-01&to_date=2026-07-03';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.property-box', { timeout: 30000 });
  console.log(`ANDORA_3_GIORNI_20260701: ${(Date.now() - start) / 1000}s`);
});

test('Ricerca 2 Giorni (Alassio)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=1&from_date=2026-07-18&to_date=2026-07-19';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.property-box', { timeout: 30000 });
  console.log(`ALASSIO_3_GIORNI_20260718: ${(Date.now() - start) / 1000}s`);
});

test('Ricerca 1 Giorni (Bonassola)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=53&from_date=2026-08-05&to_date=2026-08-05';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.property-box', { timeout: 30000 });
  console.log(`BONASSOLA_1_GIORNO_20260805: ${(Date.now() - start) / 1000}s`);
});

