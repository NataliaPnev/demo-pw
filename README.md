# Demo Playwright Project

## Description

This project contains Playwright tests for:

- Signing in
- Placing an order by filling in username and email fields

## Setup

1. Clone the repository.

2. Install dependencies:
   `npm install`
3. Сreate a `.env` file in the root directory with the following content:
   `
   APP_URL=https://fe-delivery.tallinn-learning.ee/
   `
## Running Tests

1. Run all tests:
   `npx playwright test`
2. Run all tests on Chromium:
   `npx playwright test --project=chromium`
3. Run a specific test file on Chromium:
   `npx playwright test tests/lesson16-1.spec.ts --project=chromium`
4. Run all tests on Chromium in debug mode:
   `npx playwright test --project=chromium --debug`