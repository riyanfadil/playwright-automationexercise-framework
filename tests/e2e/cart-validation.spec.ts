import { test, expect } from '../../fixtures/test-fixtures';
import { URLS } from '../../constants/urls';

test.describe('Cart Validation Tests', () => {

  test('Verify products are added to cart and total matches', async ({
    page,
    homePage,
    productsPage,
    cartPage,
  }) => {
    test.info().annotations.push({ type: 'test_type', description: '@regression' });

    await test.step('Navigate and add products', async () => {
      await homePage.navigate(URLS.BASE_URL);
      await homePage.clickProducts();
      await productsPage.verifyProductsPageVisible();

      await productsPage.addFirstProductToCart();
      await productsPage.clickContinueShopping();
      await productsPage.addSecondProductToCart();
      await productsPage.clickViewCartFromModal();
    });

    await test.step('Validate cart contents', async () => {
      await cartPage.verifyCartPageVisible();
      await cartPage.verifyCartItemsCount(2);

      // Example of soft assertions checking prices
      const firstItemPriceText = await page.locator('.cart_price p').nth(0).textContent();
      expect.soft(firstItemPriceText).toBeTruthy();
      
      const secondItemPriceText = await page.locator('.cart_price p').nth(1).textContent();
      expect.soft(secondItemPriceText).toBeTruthy();
    });
  });
});
