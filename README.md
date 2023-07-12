
**Travelopia - Exodus Booking and Payment Screen with DUMMY Master Card and Visa Card Details
             - Navigate Between Exodus Domain and Payment GateWay Domain
             - Navigate Back from Payment Gateway to Exodus Confirmation Domain**

**1. Tech Stack :
    a. Cypress 12 version
    b. Typescript
    c. BDD - Cucumber
    d. Cucumber html Reporter**


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

**  Cypress Runner Execution Screenshots : 
**
6. ![Screenshot 2023-07-12 at 4 37 53 PM](https://github.com/Rjrameshwar9/Travelopia/assets/139285775/8ae4319b-a89c-438a-9c30-67a758d71a94)
7. ![Screenshot 2023-07-12 at 4 39 06 PM](https://github.com/Rjrameshwar9/Travelopia/assets/139285775/e9e2a9c9-5aa0-401f-a9d5-38ef8df90061)



Reports:
1. Open the cucumber-report.html after execution

Execution Video :
1. Can see Execution Video under video folder [Will get generate when you execute : npm test]
