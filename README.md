# Playwright Automation Framework

This project is a robust End-to-End (E2E) Automation Framework built with **Playwright** and **TypeScript** for the [AutomationExercise](https://automationexercise.com/) website.

## 🚀 Features & Tech Stack
- **Language**: TypeScript
- **Framework**: Playwright Test
- **Architecture**: Page Object Model (POM) + Test Fixtures
- **Test Data**: Faker.js for dynamic data generation + JSON for static data
- **Reporting**: Playwright HTML Report + Allure Report
- **CI/CD**: GitHub Actions integration

## 📁 Folder Structure
- `.github/workflows/`: GitHub Actions CI/CD configuration.
- `pages/`: Page Object Model (POM) classes.
- `fixtures/`: Playwright custom test fixtures.
- `tests/e2e/`: E2E test specs (e.g., full user journey).
- `test-data/`: Static JSON files.
- `utils/`: Helper functions and random data generator.
- `constants/`: Global constants like URLs.

## 🛠️ Setup Instructions
1. **Clone the repository.**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Install Playwright Browsers**:
   ```bash
   npx playwright install
   ```
4. **Environment Variables**:
   Copy `.env.example` to `.env` if needed.

## 🧪 How to Run Tests
- **Run all tests (headless)**:
  ```bash
  npm test
  ```
- **Run tests with UI mode**:
  ```bash
  npm run test:ui
  ```
- **Run tests and generate Allure Report**:
  ```bash
  npm run test:allure
  ```

## 📊 Reports
After running tests, you can view the reports using:
- **HTML Report**: `npm run report`
- **Allure Report**: `npm run allure:generate && npm run allure:open`
