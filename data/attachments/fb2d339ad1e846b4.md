# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Test Login
- Location: tests\Login.spec.js:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://uat.me2plus.co.th/admin/summary/"
Received: "https://uat.me2plus.co.th/admin/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en" dir="ltr" translate="no" class="notranslate">…</html>
       - unexpected value "https://uat.me2plus.co.th/admin/"

```

```yaml
- banner:
  - link:
    - /url: /
    - img
- paragraph: บริษัท มีทูพลัส จำกัด
- text: อีเมล
- textbox "อีเมล":
  - /placeholder: ""
  - text: Kittinan.Kh@me2plus.com
- text: รหัสผ่าน
- textbox "รหัสผ่าน": Kittinan.Kh@me2plus.com
- button
- button "ลงชื่อเข้าใช้"
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Test Login', async ({ page }) => {
  4  |   await page.goto('https://uat.me2plus.co.th/admin/');
  5  |   await page.getByRole('textbox', { name: 'อีเมล' }).click();
  6  |   await page.getByRole('textbox', { name: 'อีเมล' }).fill('Kittinan.Kh@me2plus.com');
  7  |   await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  8  |   await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('Kittinan.Kh@me2plus.com');
  9  |   await page.getByRole('button', { name: 'ลงชื่อเข้าใช้' }).click();
> 10 |   await expect(page).toHaveURL('https://uat.me2plus.co.th/admin/summary/');
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  11 | });
```