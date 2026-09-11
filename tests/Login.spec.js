import { test, expect } from '@playwright/test';

test('Test Login111', async ({ page }) => {
  await page.goto('https://uat.me2plus.co.th/admin/');
  await page.getByRole('textbox', { name: 'อีเมล' }).click();
  await page.getByRole('textbox', { name: 'อีเมล' }).fill('Kittinan.Kh@me2plus.com');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('Kittinan.Kh@me2plus.com');
  await page.getByRole('button', { name: 'ลงชื่อเข้าใช้' }).click();
  await expect(page).toHaveURL('https://uat.me2plus.co.th/admin/summary/');
});