# Playwright Web Push Notification

Let's see if it is possible to write a test that a web push notification shows
upon a click of a button.

Following https://playwright.dev/docs/intro:

1. `npm init playwright@latest` (all defaults)
2. `npx playwright test`

I disabled all projects but the `chromium` one in `playwright.config.ts`.

I am using the UI mode to write the test: `npx playwright test --ui`.
When I need to get deep into the weeds with access to the developer tools
console, I use `await page.pause()` and run with `npx playwright test --headed`.

I have replaced the two default tests with a single one loading a local HTML
file to be testing. I have removed the `tests-examples` directory I'm not using.

I had to add this to disable CORS preventing my JS from loading off `file:`:

```js
launchOptions: {
  args: ['--disable-web-security'],
}
```

The result is not encouraging:
https://github.com/microsoft/playwright/issues/3301#issuecomment-1512005981
