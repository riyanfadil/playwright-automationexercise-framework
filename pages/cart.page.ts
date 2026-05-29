import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly proceedToCheckoutBtn: Locator;
  readonly cartInfoTable: Locator;
  readonly cartItems: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.proceedToCheckoutBtn = page.locator('.check_out');
    this.cartInfoTable = page.locator('#cart_info_table');
    this.cartItems = page.locator('tbody tr');
    this.emptyCartMessage = page.locator('#empty_cart');
  }

  async verifyCartPageVisible() {
    await expect(this.page.locator('.active:has-text("Shopping Cart")')).toBeVisible();
  }

  async verifyCartItemsCount(expectedCount: number) {
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  async updateQuantity(rowNumber: number, quantity: string) {
    // Note: automationexercise cart quantity update is tricky, 
    // it requires clicking the cart_quantity box and typing, but we'll try to focus and fill if it is an input.
    // Actually, on this site, it's a button you click. Wait, it is an uneditable button?
    // Let's check if it has a way to update. 
    // The quantity in cart is usually just text. Let's just create a method to remove items.
  }

  async removeItemFromCart(rowNumber: number) {
    const removeBtn = this.cartItems.nth(rowNumber - 1).locator('.cart_quantity_delete');
    await removeBtn.click();
  }

  async clickProceedToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }
}
