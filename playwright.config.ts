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
      name: 'pw-chromium:latest:MacOS Catalina@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'pw-firefox:latest:MacOS Catalina@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "pw-firefox:latest:Windows 10@lambdatest",
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "MicrosoftEdge:latest:macOS Mojave@lambdatest",
      use: {
        ...devices["iPhone 12 Pro Max"],
      },
    },
    {
      name: "pw-chromium:latest:Windows 10@lambdatest",
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "pw-webkit:latest:MacOS Catalina@lambdatest",
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
     // Config for running tests in local
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        channel: "chrome",
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "safari",
      use: {
        browserName: "webkit",
        viewport: { width: 1980, height: 1080 },
      },
    },
    {
      name: "firefox",
      use: {
        browserName: "firefox",
        viewport: { width: 1920, height: 1080 },
      },
    },
    // // Test in mobile viewport.
    // {
    //   name: "chrome@pixel5",
    //   use: {
    //     ...devices['iPhone 12 Pro Max'],
    //   }
    // },
  ],
}

export default config