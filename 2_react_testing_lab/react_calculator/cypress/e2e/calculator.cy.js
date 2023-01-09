describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })

  it('should have working operator buttons', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8');
  })

  it('should be able to chain operations', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
  })

  it('should have correct output for large numbers', () => {
    cy.get('#number5').click();
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10000000');
  })

  it('should have correct output for decimals', () => {
    cy.get('#number6').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12');
  })

  it('should have correct output for negative numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-30');
  })

  it('should display error when dividing by 0', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error');
  })


})