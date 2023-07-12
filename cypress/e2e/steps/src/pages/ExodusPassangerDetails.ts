

export default class ExodusPassangerDetails {


    private title = '[data-testid="title"]';
    private firstName = '[data-testid="firstName"]';
    private middleName = '[data-testid="middleName"]';
    private lastName = '[data-testid="lastName"]';
    private gender = '[data-testid="gender"]';
    private dateOfBirth = '[data-testid="dateOfBirth"]';
    private emailAddress = '[data-testid="email"]';
    private phoneNumber = '[data-testid="phoneNumber"]';
    private address = '(//input[contains(@id,"rc")])[1]';
    private autoSuggestionFirstRow = '.addresses-list > .body-text-small';
    private addressLine1 = '//span[text()="Address line 1"]';
    private newsAndInformationCheckbox = '//input[contains(@name,"newsAndOffersByEmail")]';
    private saveAndContinue = '//button[text()="Save and continue"]';


    public selectDropdown(dropDownSelector : string, value : string) {
        cy.log('Selecting Dropdown : {} with value as : {}', dropDownSelector, value);
        const cssString = '[data-testid="'+dropDownSelector+'"]';
        cy.get(cssString).select(value);
    }

    public fillInputbox(inputSelector : string, value: string) {
        cy.log('Filling input box : {} with value as : {}', inputSelector, value);
        const cssString = '[data-testid="'+inputSelector+'"]';
        cy.get(cssString).type(value);


    }

    public selectAutoSuggestedAddress(address: string) {
        cy.log('Selecting Address for : ' + address);
        cy.xpath(this.address).type(address);
        cy.get(this.autoSuggestionFirstRow).should('be.visible').first().click();
        cy.xpath(this.addressLine1).should('be.visible');
    }

    public selectNewsAndInfoCheckBox() {
        cy.log('Selecting newsAndOffersByEmail checkbox');
        cy.xpath(this.newsAndInformationCheckbox).click();
    }

    public savesAndContinue() {
        cy.log('Saving and Countinue');
        cy.xpath(this.saveAndContinue).click();
    }


    public fillPassangerDetails(dataTable: any) {
        cy.log('Filling Passanger Details');
        const passangerDetails = dataTable.hashes();
        passangerDetails.forEach((row: any) => {
            cy.log('###############');
            Object.keys(row).forEach((header: string) => {
                const getValueForHeader = row[header];
                if(header.includes('title') || header.includes('gender')) {
                    this.selectDropdown(header, getValueForHeader);
                } else if(header.includes('address')) {
                    this.selectAutoSuggestedAddress(getValueForHeader);
                }
                else {
                    this.fillInputbox(header, getValueForHeader);
                }
            })

            
        });

    }

}

