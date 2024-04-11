describe("Record Cypress Studio", () => {

    it("demo cypress studio", () =>{
        cy.log("hola mundo")
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/');
        /* ==== End Cypress Studio ==== */
    })
  
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
    })
