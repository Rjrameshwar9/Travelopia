

export default class Customise {

    private termsAndCondition = '[data-testid="termsAndConditionInput"]';
    private goToPayment = '//button[text()="Go to payment"]';

    public selectPaymentMethod(paymentMethod: string) {
        cy.log('Selecting Payment Mehod : ' + paymentMethod);
        const xpathString = '//input[@value="'+paymentMethod+'"]';
        cy.xpath(xpathString).click();
    }

    public selectTermsAndCondition() {
        cy.log('Selecting Terms and Condition ');
        cy.get(this.termsAndCondition).click();
    }

    public goToPayments() {
        cy.log('Selecting Go to payment');
        cy.xpath(this.goToPayment).click();
    }
}