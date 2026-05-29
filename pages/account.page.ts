import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class AccountPage extends BasePage {
  readonly accountCreatedMessage: Locator;
  readonly accountDeletedMessage: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.accountCreatedMessage = page.locator('[data-qa="account-created"] b');
    this.accountDeletedMessage = page.locator('[data-qa="account-deleted"] b');
    this.continueBtn = page.locator('[data-qa="continue-button"]');
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedMessage).toHaveText('Account Created!');
  }

  async verifyAccountDeleted() {
    await expect(this.accountDeletedMessage).toHaveText('Account Deleted!');
  }

  async clickContinue() {
    await this.continueBtn.click();
  }
}
