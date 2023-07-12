import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'


import ExodusPassangerDetails  from '../steps/src/pages/ExodusPassangerDetails'
import Customise from '../steps/src/pages/Customise'
import PaymentGateway from '../steps/src/pages/PaymentsGateway'

const exodusPassangerDetails =  new ExodusPassangerDetails();
const customise  = new Customise();

Given('user navigate to Exodus Booking site', ()=> {

    // const baseURL = Cypress.config().baseUrl+'booking/passengers#!departureCode=TEJA241020_FI&adults=1&children=0&tripcode=TEJ';
    const baseURL = "https://www.exodus.co.uk/booking/passengers#!departureCode=TEJA241020_FI&adults=1&children=0&tripcode=TEJ";
    cy.visit(baseURL);
    cy.log('Navigate to Exodus Details page with URL : ' + baseURL);
    
  });


  When('user provide below Lead Passanger details',(dataTable : any)=> {

    exodusPassangerDetails.fillPassangerDetails(dataTable);

  })

  When('user check  News and Offer by Email checkbox',()=> {
      exodusPassangerDetails.selectNewsAndInfoCheckBox();
  })

  When('user select Save and Continue', ()=> {
      exodusPassangerDetails.savesAndContinue();
  })

  When('user select PaymentMethod as {string} on Customise Screen',(paymentMethod: string) => {
    customise.selectPaymentMethod(paymentMethod);

  })

  When('user select Term and Condition checkbox',()=> {
      customise.selectTermsAndCondition();
  })

  When('user select Go to Payment', ()=> {
        customise.goToPayments();

  })

  When('user Provide below DUMMY Card details from Payment Screen with Payment Gateway Domain',(dataTable:any)=> {
    
    cy.log('************* Migrating to PAYMENT GATEWAY Origin *******************'); 

    cy.origin('https://www.ipg-online.com', () => {

        cy.log('*********** INSIDE PAYMENT GATEWAY ORIGIN *************')
        
        cy.get('#cardNumber').type('5100000000000511');
        cy.get('#cardholderName').type('Test Cards');
        cy.get('#expiryMonth').select('02');
        cy.get('#expiryYear').select('2024');
        cy.get('.paymentFields-argentinaLocalBrands > form > :nth-child(4) > :nth-child(3) > .form-group > #cardCodeGroup > #cardCode_masked').type('1234');
        
        cy.get('#nextBtn').click();    
    
  })
  
});

When('user navigates to Booking Confirmation Page Back on Exodus Domain', ()=> {

    cy.get('.success-message > h1').invoke('text').then((text)=> {
        cy.log('****************************************');
        cy.log('RETRIVED CONFRMATION  TEXT IS : ' + text);
        cy.log('****************************************');
        cy.get('.success-message > h1').contains('Thank you for choosing Exodus');
    })
});
   
Then('user validates {string} Message',(greetingMessage: string)=> {
        cy.log ('Validating Confirmation Sceen Message');
        cy.get('.success-message > h1').should('have.text',greetingMessage);
    });

Then('user validate Payment status on Confirmation screen as {string}',(status: string) =>{
        cy.log('validating Payment Status');
        cy.url().then((url) => {
            cy.log('****** Confirmation URL with BOOKING ID  : ' + url);
        })
        cy.get('.success-message > p > span').should('have.text', status);
    });
 