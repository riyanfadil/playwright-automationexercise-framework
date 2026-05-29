import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginSignupPage } from '../pages/login-signup.page';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { AccountPage } from '../pages/account.page';

type MyFixtures = {
  homePage: HomePage;
  loginSignupPage: LoginSignupPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  accountPage: AccountPage;
};

export const test = base.extend<MyFixtures>({
  page: async ({ page }, use) => {
    // Block ad scripts to prevent #google_vignette overlays that break navigation
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (
        url.includes('googleads') ||
        url.includes('googlesyndication') ||
        url.includes('doubleclick') ||
        url.includes('adsafe')
      ) {
        route.abort();
      } else {
        route.continue();
      }
    });
    await use(page);
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginSignupPage: async ({ page }, use) => {
    await use(new LoginSignupPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  }
});

export { expect } from '@playwright/test';
