import { test, expect, chromium } from '@playwright/test';
 
test('test', async () => {
  test.setTimeout(80000);
  const playwrightClientVersion = require('playwright/package.json').version;
 
  // Step 2: Define the LambdaTest capabilities
  const capabilities = {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright',
      'name': 'Playwright Scenario 3',
      'user': 'riya56422',
      'accessKey': 'CeIF3Pt3SrLzbBndnsAzGPRkntfFpdjqeryT5rlWOaL1moIThz',
      'network': true,  
      'video': true,  
      'console': true,  
      'tunnel': false,  
      'tunnelName': '',
      'geoLocation': '',
      'playwrightClientVersion': playwrightClientVersion
    }
  };
 
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  });
 
  const page = await browser.newPage();
 
  await page.goto('https://www.lambdatest.com/selenium-playground/');
 
  await page.getByRole('link', { name: 'Input Form Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForSelector('input[placeholder="Name"]');
  await page.fill('input[placeholder="Name"]', 'ranjith');
  await page.fill('input[placeholder="Email"]', 'as@gmail.com');
  await page.fill('input[placeholder="Password"]', 'ranji123');
  await page.fill('input[placeholder="Company"]', 'TCS');
  await page.fill('input[placeholder="Website"]', 'GOOGLE');
 
  await page.getByRole('combobox').selectOption('US');
 
  await page.fill('input[placeholder="City"]', 'BANGALORE');
  await page.fill('input[placeholder="Address 1"]', 'QAQQ');
  await page.fill('input[placeholder="Address 2"]', 'QASW');
  await page.fill('input[placeholder="State"]', 'KARNATAKA');
  await page.fill('input[placeholder="Zip code"]', '653654');
 
  await page.getByRole('button', { name: 'Submit' }).click();
 
  const successMessageLocator = page.locator('text="Thanks for contacting us, we will get back to you shortly."');
 
  const successMessage = await successMessageLocator.textContent();
  expect(successMessage).toContain('Thanks for contacting us, we will get back to you shortly.'); // Verify the exact success message
 
  console.log(successMessage);
 
  await page.close();
  await browser.close();
});
 