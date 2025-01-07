import { devices, PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  timeout: 10 * 50000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1920, height: 1080 },
    permissions: ['geolocation'],
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        channel: 'chrome', // Use the Chrome browser
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
}

export default config
