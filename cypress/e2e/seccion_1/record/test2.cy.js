Cypress.on('uncaught:exception', (err, runnable) =>{  //este codigo es cuando presenta error sin sentidos
    return false
}) 

describe("Record Cypress Studio", () => {
    it("Validar página de inicio", () =>{
        cy.visit("https://demoqa.com/")
        cy.wait(2000)


        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > :nth-child(1) > .card-body').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click();
        cy.get('#userName').type('katherine');         
        cy.get('#userEmail').type('katherine.11@gmail.com');    
        cy.get('#currentAddress').type("direccion1");
        cy.get('#permanentAddress').type("direccion 2");
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('test_checkbox', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/');
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click({force: true});
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click({force: true});
        cy.get('.rct-option-expand-all > .rct-icon > path').click({force: true});
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click({force: true});
        cy.get('#tree-node-desktop').check({force: true});
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click({force: true});
        cy.get('#tree-node-react').check({force: true});
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click({force: true});
        cy.get('#tree-node-office').check({force: true});
        /* ==== End Cypress Studio ==== */
    });
})
