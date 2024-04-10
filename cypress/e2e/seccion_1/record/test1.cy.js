describe("Record Cypress Studio", () => {

    it("demo cypress studio", () =>{
        cy.log("hola mundo")
      })
  
      it("mi segundo test - Validar página de inicio", () =>{
         cy.visit("https://demoqa.com/")
         cy.wait(2000)
         

        })   
    })
