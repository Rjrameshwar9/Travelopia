
Travelopia - Exodus Booking with DUMMY Master Card and Visa Card Details

1. Tech Stack :
    a. Cypress 12 version
    b. Typescript
    c. BDD - Cucumber
    d. Cucumber html Reporter


Exodus Booking - Payment Feature :
1. Filling of Lead Passanger details [can integrate with External Library for Test Data : Faker]
2. Selecting Card and Terms and Condition on  Customise page
3. Navigate to PAYMENT Domain
4. Fill DUMMY Master card/VISA Card Details hardcoded as of now
5. Redirect back to EXODUS Confirmation Domain
6. verifying The Thank you Message on Confirmation Page


Execution :
1. Install All Dependencies by running :  npm i
2. in case wanted to execute Background : npm test
3. To Observe the Execution Through Cypress Runner [Run on Electron Browser]: npx cypress open
4. In case wanted to have tag based execution  : npx tag: mastercard or npx tag:visa


Reports:
1. Open the cucumber-report.html after execution

Execution Video :
1. Can see Execution Video under video folder [Will get generate when you execute : npm test]