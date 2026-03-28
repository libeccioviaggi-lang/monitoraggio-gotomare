const { test, expect } = require('@playwright/test');

test('Ricerca 1 Giorno (Andora)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=3&from_date=2026-07-01&to_date=2026-07-01';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.property-box', { timeout: 30000 });
  console.log(`TEMPO_1_GIORNO: ${(Date.now() - start) / 1000}s`);
});

test('Ricerca 3 Giorni (Andora)', async ({ page }) => {
  const url = 'https://www.gotomare.holiday/search?city_id=3&from_date=2026-07-01&to_date=2026-07-03';
  const start = Date.now();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.property-box', { timeout: 30000 });
  console.log(`TEMPO_3_GIORNI: ${(Date.now() - start) / 1000}s`);
});
