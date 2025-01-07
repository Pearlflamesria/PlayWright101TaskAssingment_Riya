import { test, expect, chromium } from '@playwright/test';
 
test('test', async () => {
  // Set a timeout for the test
  test.setTimeout(60000);
 
  // Get the Playwright client version
  const playwrightClientVersion = require('playwright/package.json').version;
 
  // Define the LambdaTest capabilities
  const capabilities = {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright',
      'name': 'Playwright Scenario 2',
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
 
 
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
 
 
  await page.getByRole('heading', { name: 'Default value 15' }).click();
 
 
  const slider = await page.locator('#slider3').getByRole('slider');
 
  const sliderBox = await slider.boundingBox();
  if (!sliderBox) {
    throw new Error('Slider bounding box not found');
  }
 
 
  const totalSliderWidth = sliderBox.width;
 
  const valueRange = 100 - 15;
  const targetValue = 95;
 
  const targetOffset = totalSliderWidth * (targetValue - 15) / valueRange;
 
  const targetX = sliderBox.x + targetOffset;
  const targetY = sliderBox.y + sliderBox.height / 2;
 
 
  await page.mouse.move(targetX, targetY);
  await page.mouse.down();
  await page.mouse.move(targetX + 50, targetY);
  await page.mouse.up();
 
 
  await page.waitForTimeout(500);
 
  const finalValue = await page.locator('#range').innerText();
 
 
 
  await browser.close();
});