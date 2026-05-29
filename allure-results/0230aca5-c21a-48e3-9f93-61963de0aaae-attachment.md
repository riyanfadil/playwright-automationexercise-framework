# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\user-journey.spec.ts >> Full User Journey >> User Registration, Shop, Checkout, and Delete Account
- Location: tests\e2e\user-journey.spec.ts:7:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect.toHaveText: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Automation Exercise website" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Lilyan Veum
  - generic [ref=e46]:
    - heading "Order Placed!" [level=2] [ref=e47]
    - paragraph [ref=e48]: Congratulations! Your order has been confirmed!
    - link "Download Invoice" [ref=e49] [cursor=pointer]:
      - /url: /download_invoice/400
    - link "Continue" [ref=e51] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=e52]:
    - generic [ref=e57]:
      - heading "Subscription" [level=2] [ref=e58]
      - generic [ref=e59]:
        - textbox "Your email address" [ref=e60]
        - button "" [ref=e61] [cursor=pointer]:
          - generic [ref=e62]: 
        - paragraph [ref=e63]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e67]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | import { BasePage } from './base.page';
  3  | 
  4  | export class AccountPage extends BasePage {
  5  |   readonly accountCreatedMessage: Locator;
  6  |   readonly accountDeletedMessage: Locator;
  7  |   readonly continueBtn: Locator;
  8  | 
  9  |   constructor(page: Page) {
  10 |     super(page);
  11 |     this.accountCreatedMessage = page.locator('[data-qa="account-created"] b');
  12 |     this.accountDeletedMessage = page.locator('[data-qa="account-deleted"] b');
  13 |     this.continueBtn = page.locator('[data-qa="continue-button"]');
  14 |   }
  15 | 
  16 |   async verifyAccountCreated() {
  17 |     await expect(this.accountCreatedMessage).toHaveText('Account Created!');
  18 |   }
  19 | 
  20 |   async verifyAccountDeleted() {
> 21 |     await expect(this.accountDeletedMessage).toHaveText('Account Deleted!');
     |                                              ^ Error: expect.toHaveText: Target page, context or browser has been closed
  22 |   }
  23 | 
  24 |   async clickContinue() {
  25 |     await this.continueBtn.click();
  26 |   }
  27 | }
  28 | 
```