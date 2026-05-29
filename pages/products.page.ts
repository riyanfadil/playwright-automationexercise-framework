import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchBtn: Locator;
  readonly firstProductWrapper: Locator;
  readonly secondProductWrapper: Locator;
  readonly continueShoppingBtn: Locator;
  readonly viewCartLinkInModal: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('#search_product');
    this.searchBtn = page.locator('#submit_search');
    
    // Target the entire product wrapper to allow hovering
    this.firstProductWrapper = page.locator('.product-image-wrapper').nth(0);
    this.secondProductWrapper = page.locator('.product-image-wrapper').nth(1); 
    
    this.continueShoppingBtn = page.locator('button.close-modal');
    this.viewCartLinkInModal = page.locator('.modal-content a[href="/view_cart"]');
  }

  async verifyProductsPageVisible() {
    // Handle edge case where Google Vignette might append to URL despite ad blocker
    await expect(this.page).toHaveURL(/.*\/products.*/);
    await expect(this.page.locator('h2:has-text("All Products")')).toBeVisible();
  }

  async addFirstProductToCart() {
    await this.firstProductWrapper.hover();
    await this.firstProductWrapper.locator('.overlay-content .add-to-cart').click();
    await this.continueShoppingBtn.waitFor({ state: 'visible', timeout: 15000 });
  }

  async addSecondProductToCart() {
    await this.secondProductWrapper.hover();
    await this.secondProductWrapper.locator('.overlay-content .add-to-cart').click();
    await this.viewCartLinkInModal.waitFor({ state: 'visible', timeout: 15000 });
  }

  async clickContinueShopping() {
    await this.continueShoppingBtn.click();
    // Wait for the modal to hide
    await this.continueShoppingBtn.waitFor({ state: 'hidden', timeout: 10000 });
  }

  async clickViewCartFromModal() {
    await this.viewCartLinkInModal.click();
  }
}
