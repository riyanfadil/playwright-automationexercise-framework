# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\user-journey.spec.ts >> Full User Journey >> User Registration, Shop, Checkout, and Delete Account
- Location: tests\e2e\user-journey.spec.ts:7:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h2:has-text("All Products")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h2:has-text("All Products")')

```

```yaml
- banner:
  - heading "Web server is returning an unknown error Error code 520" [level=1]
  - text: Visit
  - link "cloudflare.com":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
  - text: for more information. 2026-05-29 08:25:51 UTC
- text: You
- heading "Browser" [level=3]
- text: Working
- link:
  - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
- text: Singapore
- heading "Cloudflare" [level=3]:
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
- text: Working automationexercise.com
- heading "Host" [level=3]
- text: Error
- heading "What happened?" [level=2]
- paragraph: There is an unknown connection issue between Cloudflare and the origin web server. As a result, the web page can not be displayed.
- heading "What can I do?" [level=2]
- heading "If you are a visitor of this website:" [level=3]
- paragraph: Please try again in a few minutes.
- heading "If you are the owner of this website:" [level=3]
- paragraph:
  - text: There is an issue between Cloudflare's cache and your origin web server. Cloudflare monitors for these errors and automatically investigates the cause. To help support the investigation, you can pull the corresponding error log from your web server and submit it our support team. Please include the Ray ID (which is at the bottom of this error page).
  - link "Additional troubleshooting resources":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-520/
  - text: .
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: a0341c5dabdedb41
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | import { BasePage } from './base.page';
  3  | 
  4  | export class ProductsPage extends BasePage {
  5  |   readonly searchInput: Locator;
  6  |   readonly searchBtn: Locator;
  7  |   readonly firstProductWrapper: Locator;
  8  |   readonly secondProductWrapper: Locator;
  9  |   readonly continueShoppingBtn: Locator;
  10 |   readonly viewCartLinkInModal: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     super(page);
  14 |     this.searchInput = page.locator('#search_product');
  15 |     this.searchBtn = page.locator('#submit_search');
  16 |     
  17 |     // Target the entire product wrapper to allow hovering
  18 |     this.firstProductWrapper = page.locator('.product-image-wrapper').nth(0);
  19 |     this.secondProductWrapper = page.locator('.product-image-wrapper').nth(1); 
  20 |     
  21 |     this.continueShoppingBtn = page.locator('button.close-modal');
  22 |     this.viewCartLinkInModal = page.locator('.modal-content a[href="/view_cart"]');
  23 |   }
  24 | 
  25 |   async verifyProductsPageVisible() {
  26 |     // Handle edge case where Google Vignette might append to URL despite ad blocker
  27 |     await expect(this.page).toHaveURL(/.*\/products.*/);
> 28 |     await expect(this.page.locator('h2:has-text("All Products")')).toBeVisible();
     |                                                                    ^ Error: expect(locator).toBeVisible() failed
  29 |   }
  30 | 
  31 |   async addFirstProductToCart() {
  32 |     await this.firstProductWrapper.hover();
  33 |     await this.firstProductWrapper.locator('.overlay-content .add-to-cart').click();
  34 |     await this.continueShoppingBtn.waitFor({ state: 'visible', timeout: 15000 });
  35 |   }
  36 | 
  37 |   async addSecondProductToCart() {
  38 |     await this.secondProductWrapper.hover();
  39 |     await this.secondProductWrapper.locator('.overlay-content .add-to-cart').click();
  40 |     await this.viewCartLinkInModal.waitFor({ state: 'visible', timeout: 15000 });
  41 |   }
  42 | 
  43 |   async clickContinueShopping() {
  44 |     await this.continueShoppingBtn.click();
  45 |     // Wait for the modal to hide
  46 |     await this.continueShoppingBtn.waitFor({ state: 'hidden', timeout: 10000 });
  47 |   }
  48 | 
  49 |   async clickViewCartFromModal() {
  50 |     await this.viewCartLinkInModal.click();
  51 |   }
  52 | }
  53 | 
```