@Exodus @EndToEnd
Feature: [Exodus - E2E] - Complete Exodus Customer Booking Workflow with Dummy Master Card and VISA cards

    In order to validate End to End Workflow for Exodus
    user is providing all Passenger details
    with Dummy Mastercard and VISA cards
    and validate Message on Confirmation Page


    Background: Passanger details for Booking
        Given user navigate to Exodus Booking site
        When user provide below Lead Passanger details
            | title | firstName | middleName | lastName | gender | dateOfBirth | email          | phoneNumber | address  |
            | Mr.   | Joe       | Henry      | windsor  | Male   | 1990-08-07  | test@gmail.com | 12345678    | brooklyn |
        And user check  News and Offer by Email checkbox
        And user select Save and Continue


    @mastercard
    Scenario: verify Payment status by Providing DUMMY MasterCard Details
        When user select PaymentMethod as "Mastercard" on Customise Screen
        And user select Term and Condition checkbox
        And user select Go to Payment
        And user Provide below DUMMY Card details from Payment Screen with Payment Gateway Domain
            | cardNumber       | cardholderName    | expiryMonth | expiryYear | cardCode |
            | 5100000000000511 | Test Master Cards | 02          | 2025       | 1234     |
        And user navigates to Booking Confirmation Page Back on Exodus Domain
        Then user validates "Thank you for choosing Exodus to book your next adventure" Message
        And user validate Payment status on Confirmation screen as "failed"


    @visa
    Scenario: verify Payment status by Providing DUMMY VISA Card Details
        When user select PaymentMethod as "Visa" on Customise Screen
        And user select Term and Condition checkbox
        And user select Go to Payment
        And user Provide below DUMMY Card details from Payment Screen with Payment Gateway Domain
            | cardNumber       | cardholderName  | expiryMonth | expiryYear | cardCode |
            | 4111111111111111 | Test Visa Cards | 02          | 2026       | 1234     |
        And user navigates to Booking Confirmation Page Back on Exodus Domain
        Then user validates "Thank you for choosing Exodus to book your next adventure" Message
        And user validate Payment status on Confirmation screen as "failed"


