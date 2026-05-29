# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\user-journey.spec.ts >> Full User Journey >> User Registration, Shop, Checkout, and Delete Account
- Location: tests\e2e\user-journey.spec.ts:7:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('tbody tr')
Expected: 1
Received: 2
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('tbody tr')
    13 × locator resolved to 2 elements
       - unexpected value "2"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Logout" [ref=e23]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Mr. Ray Ruecker II
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Home" [ref=e48]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - generic [ref=e54] [cursor=pointer]: Proceed To Checkout
    - table [ref=e56]:
      - rowgroup [ref=e57]:
        - row "Item Description Price Quantity Total" [ref=e58]:
          - cell "Item" [ref=e59]
          - cell "Description" [ref=e60]
          - cell "Price" [ref=e61]
          - cell "Quantity" [ref=e62]
          - cell "Total" [ref=e63]
          - cell [ref=e64]
      - rowgroup [ref=e65]:
        - row "Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500 " [ref=e66]:
          - cell "Product Image" [ref=e67]:
            - link "Product Image" [ref=e68]:
              - /url: ""
              - img "Product Image" [ref=e69]
          - cell "Blue Top Women > Tops" [ref=e70]:
            - heading "Blue Top" [level=4] [ref=e71]:
              - link "Blue Top" [ref=e72]:
                - /url: /product_details/1
            - paragraph [ref=e73]: Women > Tops
          - cell "Rs. 500" [ref=e74]:
            - paragraph [ref=e75]: Rs. 500
          - cell "1" [ref=e76]:
            - button "1" [ref=e77] [cursor=pointer]
          - cell "Rs. 500" [ref=e78]:
            - paragraph [ref=e79]: Rs. 500
          - cell "" [ref=e80]:
            - generic [ref=e82] [cursor=pointer]: 
        - row "Product Image Men Tshirt Men > Tshirts Rs. 400 1 Rs. 400 " [ref=e83]:
          - cell "Product Image" [ref=e84]:
            - link "Product Image" [ref=e85]:
              - /url: ""
              - img "Product Image" [ref=e86]
          - cell "Men Tshirt Men > Tshirts" [ref=e87]:
            - heading "Men Tshirt" [level=4] [ref=e88]:
              - link "Men Tshirt" [ref=e89]:
                - /url: /product_details/2
            - paragraph [ref=e90]: Men > Tshirts
          - cell "Rs. 400" [ref=e91]:
            - paragraph [ref=e92]: Rs. 400
          - cell "1" [ref=e93]:
            - button "1" [ref=e94] [cursor=pointer]
          - cell "Rs. 400" [ref=e95]:
            - paragraph [ref=e96]: Rs. 400
          - cell "" [ref=e97]:
            - generic [ref=e99] [cursor=pointer]: 
  - contentinfo [ref=e100]:
    - generic [ref=e105]:
      - heading "Subscription" [level=2] [ref=e106]
      - generic [ref=e107]:
        - textbox "Your email address" [ref=e108]
        - button "" [ref=e109] [cursor=pointer]:
          - generic [ref=e110]: 
        - paragraph [ref=e111]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e115]: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/test-fixtures';
  2  | import { DataGenerator } from '../../utils/data-generator';
  3  | import { URLS } from '../../constants/urls';
  4  | 
  5  | test.describe('Full User Journey', () => {
  6  | 
  7  |   test('User Registration, Shop, Checkout, and Delete Account', async ({
  8  |     page,
  9  |     homePage,
  10 |     loginSignupPage,
  11 |     productsPage,
  12 |     cartPage,
  13 |     checkoutPage,
  14 |     accountPage
  15 |   }) => {
  16 |     const userData = DataGenerator.generateRandomUser();
  17 |     test.info().annotations.push({ type: 'test_type', description: '@e2e @regression' });
  18 | 
  19 |     await test.step('1. Navigate to Home Page and verify', async () => {
  20 |       await homePage.navigate(URLS.BASE_URL);
  21 |       await homePage.verifyHomePageIsVisible();
  22 |     });
  23 | 
  24 |     await test.step('2. Click on Signup / Login', async () => {
  25 |       await homePage.clickSignupLogin();
  26 |       await loginSignupPage.verifyNewUserSignupVisible();
  27 |     });
  28 | 
  29 |     await test.step('3. Register User', async () => {
  30 |       await loginSignupPage.fillSignupForm(userData.name, userData.email);
  31 |       await loginSignupPage.verifyAccountInfoVisible();
  32 |       await loginSignupPage.fillAccountInformation(userData);
  33 |       await accountPage.verifyAccountCreated();
  34 |       
  35 |       // Take screenshot of success page
  36 |       await accountPage.takeScreenshot('Account_Created_Success');
  37 |       
  38 |       await accountPage.clickContinue();
  39 |       await homePage.verifyLoggedInAs(userData.name);
  40 |     });
  41 | 
  42 |     await test.step('4. Browse Products and Add to Cart', async () => {
  43 |       await homePage.clickProducts();
  44 |       await productsPage.verifyProductsPageVisible();
  45 |       
  46 |       await productsPage.addFirstProductToCart();
  47 |       await productsPage.clickContinueShopping();
  48 |       
  49 |       await productsPage.addSecondProductToCart();
  50 |       await productsPage.clickViewCartFromModal();
  51 |     });
  52 | 
  53 |     await test.step('5. Cart Management Validation', async () => {
  54 |       await cartPage.verifyCartPageVisible();
  55 |       await cartPage.verifyCartItemsCount(2);
  56 |       
  57 |       // Remove an item and wait for UI to update
  58 |       await cartPage.removeItemFromCart(1);
  59 |       
  60 |       // Auto-retrying assertion to wait until the item is actually removed
> 61 |       await expect(cartPage.cartItems).toHaveCount(1);
     |                                        ^ Error: expect(locator).toHaveCount(expected) failed
  62 |     });
  63 | 
  64 |     await test.step('6. Checkout Process', async () => {
  65 |       await cartPage.clickProceedToCheckout();
  66 |       await checkoutPage.verifyCheckoutPageVisible();
  67 |       
  68 |       await checkoutPage.enterComment('Please deliver between 9 AM and 5 PM');
  69 |       await checkoutPage.clickPlaceOrder();
  70 |       
  71 |       await checkoutPage.fillPaymentDetails(
  72 |         userData.name,
  73 |         '4111222233334444',
  74 |         '123',
  75 |         '12',
  76 |         '2028'
  77 |       );
  78 |       await checkoutPage.clickPayAndConfirm();
  79 |       
  80 |       // Validate Order Success
  81 |       await checkoutPage.verifyOrderSuccess();
  82 |       await checkoutPage.takeScreenshot('Order_Placed_Success');
  83 |     });
  84 | 
  85 |     await test.step('7. Delete Account', async () => {
  86 |       await homePage.clickDeleteAccount();
  87 |       await accountPage.verifyAccountDeleted();
  88 |       await accountPage.takeScreenshot('Account_Deleted_Success');
  89 |       await accountPage.clickContinue();
  90 |     });
  91 |   });
  92 | });
  93 | 
```