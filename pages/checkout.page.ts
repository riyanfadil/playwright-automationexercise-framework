import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  readonly commentInput: Locator;
  readonly placeOrderBtn: Locator;
  
  // Payment
  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly payAndConfirmBtn: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.commentInput = page.locator('textarea[name="message"]');
    this.placeOrderBtn = page.locator('a[href="/payment"]');
    
    // Payment Locators
    this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
    this.cardNumberInput = page.locator('[data-qa="card-number"]');
    this.cvcInput = page.locator('[data-qa="cvc"]');
    this.expiryMonthInput = page.locator('[data-qa="expiry-month"]');
    this.expiryYearInput = page.locator('[data-qa="expiry-year"]');
    this.payAndConfirmBtn = page.locator('[data-qa="pay-button"]');
    
    this.successMessage = page.locator('[data-qa="order-placed"] b');
  }

  async verifyCheckoutPageVisible() {
    await expect(this.page.locator('h2:has-text("Review Your Order")')).toBeVisible();
  }

  async enterComment(comment: string) {
    await this.commentInput.fill(comment);
  }

  async clickPlaceOrder() {
    await this.placeOrderBtn.click();
  }

  async fillPaymentDetails(name: string, cardNo: string, cvc: string, month: string, year: string) {
    await this.nameOnCardInput.fill(name);
    await this.cardNumberInput.fill(cardNo);
    await this.cvcInput.fill(cvc);
    await this.expiryMonthInput.fill(month);
    await this.expiryYearInput.fill(year);
  }

  async clickPayAndConfirm() {
    await this.payAndConfirmBtn.click();
  }

  async verifyOrderSuccess() {
    await expect(this.successMessage).toHaveText('Order Placed!');
  }
}
