# Playwright Automation Framework

**Robust End-to-End Automation Framework** built with **Playwright + TypeScript** for [AutomationExercise.com](https://automationexercise.com/).

![Playwright](https://img.shields.io/badge/Playwright-2C3E50?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=github-actions&logoColor=white)

## 🚀 Features

- Full User Journey Automation (Register → Login → Shop → Checkout → Delete Account)
- Clean **Page Object Model (POM)** Architecture
- Custom Test Fixtures
- Dynamic test data generation using Faker.js
- Cross-browser testing (Chromium, Firefox, WebKit)
- Comprehensive reporting (HTML + Allure)
- **Daily Automated Test** with Email Report via GitHub Actions
- CI/CD Ready

## 🛠️ Tech Stack

- **Language**: TypeScript
- **Framework**: Playwright Test
- **Architecture**: Page Object Model + Fixtures
- **Reporting**: Playwright HTML + Allure Report
- **CI/CD**: GitHub Actions (Daily Scheduler + Email Report)
- **Test Data**: Faker.js + JSON

## 📁 Folder Structure

```bash
automation-web-playwright/
├── .github/workflows/              # GitHub Actions (Daily + CI/CD)
├── pages/                          # Page Object Models
├── fixtures/                       # Custom test fixtures
├── tests/e2e/                      # Test specifications
├── test-data/                      # Static test data
├── utils/                          # Helpers & data generators
├── constants/                      # URLs & constants
├── playwright.config.ts
├── .env.example
└── README.md

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

##🔄 CI/CD & Daily Automation
- **Daily Test dijalankan otomatis setiap hari pukul 15:00 WIB
- **Report dikirim otomatis ke email
- **Semua run bisa dilihat di tab Actions

##✨ Key Highlights
- **Clean & maintainable code
- **Proper error handling & soft assertions
- **Reusable components
- **Ready for production-level test automation