// lambdatest-setup.ts

import { chromium, Browser, Page } from '@playwright/test';
import { test as base } from '@playwright/test';

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Playwright',
    name: 'Playwright scenario',
    user: 'riya56422',  // Replace with your LambdaTest username
    accessKey: 'CeIF3Pt3SrLzbBndnsAzGPRkntfFpdjqeryT5rlWOaL1moIThz',  // Replace with your LambdaTest access key
    network: true,
    video: true,
    console: true,
    tunnel: false,
    tunnelName: '',
    geoLocation: '',
    playwrightClientVersion: '1.24.0'  // Make sure to use the correct Playwright version
  }
};

export const test = base.extend<{
  page: Page;
  browser: Browser;
}>({
  browser: async ({}, use) => {
    // Connect to LambdaTest via Playwright WebSocket
    const browser = await chromium.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
    });
    await use(browser);
    await browser.close();
  },
  page: async ({ browser }, use) => {
    const page = await browser.newPage();
    await use(page);
    await page.close();
  },
});
