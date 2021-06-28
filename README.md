Getting Started
Prerequisites - You need to have installed NodeJS.

Installation, in terminal run: 
npm install
-------------------------------------------------
Test files are located cypress/integration 
- functionality.js
- visual.js
Snapshots from visual tests are saved cypress/screenshots/visual

Using Cypress GUI, run in terminal: 
npx cypress open

Using Cypress in Terminal
To run all tests using headless Electron browser (Chromium)
npx cypress run