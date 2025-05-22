# OrangeHRM Automation Demo

## Features

- Playwright + TypeScript  
- Page Object Model (POM) structure for maintainability  
- Covers Login and User Search functionalities  
- Cross-browser testing: Chromium, Firefox, WebKit  
- CI/CD ready (compatible with GitHub Actions, Jenkins, GitLab CI)  
- Supports UI, API, Regression, and Performance testing  
- Configurable parameters and detailed reporting  

---

## Test Types Supported

### UI Tests
- End-to-end browser automation using Playwright  
- Examples include login flow, user search, and validations  

### API Tests
- Backend testing using Playwright's built-in APIRequestContext  
- Example: Login API test to verify authentication endpoint  

### Regression Tests
- Tag tests with `@regression` annotation to selectively run regression suites  
- Example command to run regression tests only:
  ```bash
  npx playwright test --grep "@regression"
  ```

### Performance Tests
- Use Playwright tracing for performance insights, including screenshots and snapshots
- Generate trace files and analyze with Playwright Trace Viewer
  ```bash
  npx playwright show-trace trace.zip
  ```

## Setup & Run Tests

### Install dependencies:
```bash
npm install
```

### Run all tests:
```bash
npx playwright test
```

### View test report:
```bash
npx playwright show-report
```

### Run regression tests only:
```bash
npx playwright test --grep "@regression"
```

### Run API tests only (if tests are organized by folder or tags):
```bash
npx playwright test tests/api
```

### Generate and view performance traces (example included in tests):
```bash
npx playwright test tests/performance
npx playwright show-trace trace.zip
```

## Configuration

- Base URL and credentials are configurable in `utils/env.ts` or `.env` file
- Cross-browser testing configured in `playwright.config.ts`
- Tests run headless by default; enable headed mode by modifying the config