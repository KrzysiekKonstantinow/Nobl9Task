# Nobl9 Tech Assessment - Cypress Project

This project is a tech assessment for the recruitment process at Nobl9. It automates a specific scenario on the Nobl9 website using Cypress with JavaScript, and it utilizes fixtures for data.

## Scenario

1. Go to [Nobl9](https://www.nobl9.com/) page.
2. Select Resources in the main menu and click on the "Nobl9 Blog" item.
3. Choose the latest post displayed in the "All Posts" section and click on the "Learn More" button.
4. On the post page, click the "Request a Demo" button on the page header.
5. Fill out the details in the "Request a Demo" form. Don't click submit! Instead, close the modal after completing the form.

## Requirements

- Node.js (https://nodejs.org/) - Ensure Node.js is installed on your machine.
- Cypress (https://www.cypress.io/) - Install Cypress using npm.

## Installation

### Install dependencies
```bash
npm install
npm install cypress --save-dev
```

## Running Test Locally
To run the test use the 
```bash
npx cypress run
``` 
command. Ensure that you have the necessary dependencies installed before running the tests.

## Page Object Model (POM)

This project follows the Page Object Model (POM) design pattern to improve test structure and maintainability. The core idea is to encapsulate interactions with web pages into separate objects, known as page objects.

### Structure

- **`cypress/pages/`**: Contains page object files, each representing a different page or component of the application.

- **`cypress/pages/requestIFrame.js`**: Example page object file for the "Request A Demo IFrame" on the Nobl9 website.

```javascript
// cypress/pages/requestIFrame.js

class RequestIFrame {
  
  static selectors = {
    selector1: 'locator'
  }

  getAElement() {
    return cy,get('') // ...
  }

  // ... other methods and properties
}

export default new RequestIFrame();
```

## Fixtures
This project uses Cypress fixtures for data. You can find fixture files in the cypress/fixtures directory. Modify these files to update test data.

## Custom commands
This project includes custom Cypress command to enhance test readability and maintainability. The command is located in the `cypress/support/commands.js` file.

### Command: `locateRequestIFrame`

This command enables the tests to locate elements inside the Request a Demo iframe and lets them

```javascript
// Example usage in a Cypress test
cy.locateRequestIFrame().find(locator)
```
