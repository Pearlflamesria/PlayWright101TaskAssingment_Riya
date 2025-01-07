import { test, expect, chromium } from '@playwright/test';
 
test('test', async () => {
  const playwrightClientVersion = require('playwright/package.json').version;
 
  const capabilities = {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright',
      'name': 'Playwright scenario 1',
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
  await page.getByRole('link', { name: 'Simple Form Demo' }).click();
  const messageInput = await page.locator('[placeholder="Please enter your Message"]');
  await messageInput.click();
  await messageInput.fill('Welcome to LambdaTest');
  const button = await page.getByRole('button', { name: 'Get Checked Value' });
  await button.click();
  await expect(page.locator('text=Welcome to LambdaTest')).toBeVisible();
  await browser.close();
});
 