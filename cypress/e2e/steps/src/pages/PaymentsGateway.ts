

export default class PaymentGateway {

    private cardNumber ='#cardNumber';
    private cardHolderNumber = '#cardholderName';
    private expiryMonth = '#expiryMonth';
    private expiryYear ='#expiryYear';
    private cardCode = '.paymentFields-argentinaLocalBrands > form > :nth-child(4) > :nth-child(3) > .form-group > #cardCodeGroup > #cardCode_masked';
    private nextBtn ='#nextBtn';


    public selectDropdown(dropDownSelector : string, value : string) {
        cy.log('Selecting Dropdown : {} with value as : {}', dropDownSelector, value);
        cy.get('#'+dropDownSelector).select(value);
    }

    public fillInputbox(inputSelector : string, value: string) {
        cy.log('Filling input box : {} with value as : {}', inputSelector, value);
        cy.get('#'+inputSelector).type(value);


    }

    public provideDummyCreditCardDetails(dataTable : any) {
        cy.log('Filling Passanger Details');
        const passangerDetails = dataTable.hashes();
        passangerDetails.forEach((row: any) => {
            Object.keys(row).forEach((header: string) => {
                const getValueForHeader = row[header];
                if(header.includes('expiry')) {
                    this.selectDropdown(header, getValueForHeader);
                } else {
                    this.fillInputbox(header, getValueForHeader);
                }
            })
         })
    }
}