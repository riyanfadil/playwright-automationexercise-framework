import { test, expect } from '../../fixtures/test-fixtures';
import { DataGenerator } from '../../utils/data-generator';
import { URLS } from '../../constants/urls';

test.describe('Full User Journey', () => {

  test('User Registration, Shop, Checkout, and Delete Account', async ({
    page,
    homePage,
    loginSignupPage,
    productsPage,
    cartPage,
    checkoutPage,
    accountPage
  }) => {
    const userData = DataGenerator.generateRandomUser();
    test.info().annotations.push({ type: 'test_type', description: '@e2e @regression' });

    await test.step('1. Navigate to Home Page and verify', async () => {
      await homePage.navigate(URLS.BASE_URL);
      await homePage.verifyHomePageIsVisible();
    });

    await test.step('2. Click on Signup / Login', async () => {
      await homePage.clickSignupLogin();
      await loginSignupPage.verifyNewUserSignupVisible();
    });

    await test.step('3. Register User', async () => {
      await loginSignupPage.fillSignupForm(userData.name, userData.email);
      await loginSignupPage.verifyAccountInfoVisible();
      await loginSignupPage.fillAccountInformation(userData);
      await accountPage.verifyAccountCreated();
      
      // Take screenshot of success page
      await accountPage.takeScreenshot('Account_Created_Success');
      
      await accountPage.clickContinue();
      await homePage.verifyLoggedInAs(userData.name);
    });

    await test.step('4. Browse Products and Add to Cart', async () => {
      await homePage.clickProducts();
      await productsPage.verifyProductsPageVisible();
      
      await productsPage.addFirstProductToCart();
      await productsPage.clickContinueShopping();
      
      await productsPage.addSecondProductToCart();
      await productsPage.clickViewCartFromModal();
    });

    await test.step('5. Cart Management Validation', async () => {
      await cartPage.verifyCartPageVisible();
      await cartPage.verifyCartItemsCount(2);
      
      // Remove an item and wait for UI to update
      await cartPage.removeItemFromCart(1);
      
      // Auto-retrying assertion to wait until the item is actually removed
      await expect(cartPage.cartItems).toHaveCount(1);
    });

    await test.step('6. Checkout Process', async () => {
      await cartPage.clickProceedToCheckout();
      await checkoutPage.verifyCheckoutPageVisible();
      
      await checkoutPage.enterComment('Please deliver between 9 AM and 5 PM');
      await checkoutPage.clickPlaceOrder();
      
      await checkoutPage.fillPaymentDetails(
        userData.name,
        '4111222233334444',
        '123',
        '12',
        '2028'
      );
      await checkoutPage.clickPayAndConfirm();
      
      // Validate Order Success
      await checkoutPage.verifyOrderSuccess();
      await checkoutPage.takeScreenshot('Order_Placed_Success');
    });

    await test.step('7. Delete Account', async () => {
      await homePage.clickDeleteAccount();
      await accountPage.verifyAccountDeleted();
      await accountPage.takeScreenshot('Account_Deleted_Success');
      await accountPage.clickContinue();
    });
  });
});
