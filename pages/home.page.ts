import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly headerLogo: Locator;
  readonly signupLoginLink: Locator;
  readonly logoutLink: Locator;
  readonly loggedInAsText: Locator;
  readonly productsLink: Locator;
  readonly cartLink: Locator;
  readonly deleteAccountLink: Locator;
  
  constructor(page: Page) {
    super(page);
    this.headerLogo = page.locator('.logo img');
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.logoutLink = page.locator('a[href="/logout"]');
    this.loggedInAsText = page.locator('li:has-text("Logged in as")');
    this.productsLink = page.locator('a[href="/products"]');
    this.cartLink = page.locator('a[href="/view_cart"]').first();
    this.deleteAccountLink = page.locator('a[href="/delete_account"]');
  }

  async verifyHomePageIsVisible() {
    await expect(this.headerLogo).toBeVisible();
    await expect(this.page).toHaveURL('/');
  }

  async clickSignupLogin() {
    await this.page.goto('/login');
  }

  async clickProducts() {
    await this.page.goto('/products');
  }

  async clickCart() {
    await this.page.goto('/view_cart');
  }
  
  async clickDeleteAccount() {
    await this.page.goto('/delete_account');
  }

  async verifyLoggedInAs(username: string) {
    await expect(this.loggedInAsText).toBeVisible();
    await expect(this.loggedInAsText).toContainText(username);
  }
}
