[WebdriverIO Appium Project]

1.  This project uses WebdriverIO to automate android based mobile app. WebdriverIO is a popular test automation framework for  
    mobile applications.

2.  Table of Contents
        Introduction
        Installation
        Configuration
        Writing Tests
        Running Tests
        Reporters and Results
        Contributing
        License

3.  Introduction

    WebdriverIO is a test automation framework for Node.js that allows you to run tests on various browsers and mobile devices. It supports multiple testing frameworks such as Mocha, Jasmine, and Cucumber. Office site (https://webdriver.io/)

4.  Installation
    To get started with this project, you'll need to install the necessary dependencies. Follow these steps:
    
    4.1. [Clone the repo]
    Link: https://github.com/testingbyravi/test-webdriverio-appium.git

    4.2 [git clone https://github.com/testingbyravi/test-webdriverio-appium.git]

    4.2. cd test-webdriver-appium
    
    4.3. Install the required Node.js (node>=18.17.0)

    4.4. Install visual studio code
    
    4.5 npm install

    This command will install WebdriverIO, and other dependencies.

5.  Configuration
    The WebdriverIO configuration file is located at wdio.conf.js. Here, you can configure your test environment, specify devices, set up reporters, and more.

6.  Folder Structure
    
    tests: Super main folder
    features: Target scenarios
    pages: Page Object Model Pattern
    step-definitions: Implementation of corresponding feature files


7.  Run tests & package.json
    7.1 Run below command in terminal to execute test
    [npm run test]

    7.2 Run below command in terminal to execute test and generate serenity report
    [npm run serenity]

9.  Serenity Reports

    Serenity BDD is a powerful reporting and documentation tool for behavior-driven development (BDD) and test automation. It provides detailed and structured reports of your test results, helping you to visualize and analyze test execution.
    Integration with WebdriverIO

    To integrate Serenity BDD with WebdriverIO, you need to configure Serenity as a reporting tool in your test setup. Follow these steps to configure and generate Serenity reports for your WebdriverIO tests.

    8.1 npm run serenity:update
    8.2 npm run serenity
