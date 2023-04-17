import { test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto(`file://${__dirname}/../index.html`);

  page.on('console', msg => console.log(msg.text()));

  page.on('dialog', async dialog => {
    console.log(dialog.type(), dialog.message());
    await dialog.accept();
  });

  await page.context().grantPermissions(['notifications']);
  await page.click('button');
  //expect(await page.evaluate(() => Notification.permission)).toBe('granted');
  await page.locator('body.shown').waitFor();
  await page.waitForTimeout(1000);
});
