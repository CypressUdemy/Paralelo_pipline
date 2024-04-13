Cypress.on('uncaught:exception', (err, runnable) =>{  
    return false
})

describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1536, 738)
    
       cy.visit('https://demoqa.com/')
    
       cy.get('.home-body > .category-cards > .card:nth-child(1) > div > .card-up').click({force:true})
    
       cy.get('.element-group > .show > .menu-list > #item-0 > .text').click({force:true})
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').click({force:true})
    
       cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').type('katherine')
    
       cy.get('.text-field-container > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').click({force:true})
    
       cy.get('.text-field-container > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').type('katherine11@gmail.com')
    
       cy.get('.text-field-container > #userForm > #currentAddress-wrapper > .col-md-9 > #currentAddress').click({force:true})
    
       cy.get('.text-field-container > #userForm > #permanentAddress-wrapper > .col-md-9 > #permanentAddress').click({force:true})
    
       cy.get('.text-field-container > #userForm > .mt-2 > .text-right > #submit').click({force:true})
    
       cy.get('.element-group > .show > .menu-list > #item-1 > .text').click({force:true})
    
       cy.get('.rct-text > label > .rct-node-icon > .rct-icon > path').click({force:true})
    
       cy.get('ol > .rct-node > .rct-text > label > #tree-node-home').check({force:true})
    
       cy.get('.rct-text > label > .rct-checkbox > .rct-icon > path').click({force:true})
    
       cy.get('ol > .rct-node > .rct-text > label > #tree-node-home').check({force:true})
    
       cy.get('.check-box-tree-wrapper > #tree-node > .rct-options > .rct-option-expand-all > .rct-icon').click({force:true})
    
       cy.get('#tree-node > ol > .rct-node > ol > .rct-node:nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click({force:true})
    
       cy.get('ol > .rct-node > .rct-text > label > #tree-node-desktop').check({force:true})
    
    })
   
   })
   