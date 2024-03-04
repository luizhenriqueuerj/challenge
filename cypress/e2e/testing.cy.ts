import { should } from "chai";

describe("Adding a new computer", () => {
    beforeEach(() => {
        cy.visit('https://computer-database.gatling.io/computers');
    })

    it("Creating a new computer", () => {
        cy.get('[id=add]').click();
        cy.get('input[id=name]').type('Challenge');
        cy.get('[id=introduced]').type('1994-01-29');
        cy.get('[id=discontinued]').type('2005-05-08');
        cy.get('[id=company]').select('3')
        cy.contains('Create this computer').click();
        cy.contains(`Computer Challenge has been created`);
        cy.get('[id=add]').should('be.visible');
    })

    it("Trying to search by computer created" , () => {
        //This test case has a bug because of the response the POST on Creation Page has a bug
        //303 See Other from the API POST
        cy.get('[id=searchbox]').type('Challenge');
        cy.get('[id=searchsubmit]').click();
        cy.get('.well').should('have.text', 'Nothing to display');
    })

    it("Checks form validation while adding a computer", () => {
        cy.get('[id=add]').click();
        cy.get('input[id=name]').type('Challenge');
        cy.get('[id=introduced]').type('29-01-1994');
        cy.get('[id=discontinued]').type('05-08-2022');
        cy.contains('Create this computer').click();
        cy.get('.help-inline').should('contain', 'Failed to decode date');
    })
});