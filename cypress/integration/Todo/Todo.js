/*describe('Cypress Test on Todo Project', function() {
  it('visits My Todo App', function() {
    cy.visit('/')
  })

  it('should focus to the input', () => {
    cy.focused().should('have.class', 'input')
  })

  it('initially has 3 todos', () => {
    cy.get('.todo').should('have.length', 3)
  })

  it('has "React Hooks" at first todo', () => {
    cy.get('.todo')
      .first()
      .children()
      .first()
      .should('have.text', 'React Hooks')
  })

  it('has "Cypress.io" at 3rd todo', () => {
    cy.get('.todo')
      .eq(2)
      .children()
      .first()
      .should('have.text', 'Cypress.io')
  })

  it('adds a new todo', () => {
    const txt = 'Learn about cypress'
    cy.get('.input')
      .type(txt)
      .type('{enter}')
      .get('.todo')
      .should('have.length', 4)
  })

  it('checks first todo', () => {
    cy.get('.btn-check')
      .first()
      .click()

    cy.get('.todo')
      .first()
      .should('have.css', 'text-decoration')
      .and('match', /line-through/)
  })

  it('removes last 2 todos', () => {
    cy.get('.btn-close')
      .last()
      .click()

    cy.get('.btn-close')
      .last()
      .click()

    cy.get('.todo').should('have.length', 2)
  })
}) 
*/
describe('Cypress Test on Todo Project', function() {
  before(() => {
    cy.visit('/');
    cy.wait(1000); // Adjust wait time as necessary to ensure application is fully loaded
  });

  it('visits My Todo App', function() {
    // Ensure the application is loaded and visible
    cy.get('.app-container').should('be.visible');
  });

  it('should focus on the input', () => {
    cy.get('.input').should('be.focused');
  });

  it('initially has 3 todos', () => {
    cy.get('.todo').should('have.length', 3);
  });

  it('has "React Hooks" at first todo', () => {
    cy.get('.todo')
      .first()
      .children()
      .first()
      .should('have.text', 'React Hooks');
  });

  it('has "Cypress.io" at 3rd todo', () => {
    cy.get('.todo')
      .eq(2)
      .children()
      .first()
      .should('have.text', 'Cypress.io');
  });

  it('adds a new todo', () => {
    const txt = 'Learn about Cypress';
    cy.get('.input')
      .type(txt)
      .type('{enter}');
    
    // Wait for the new todo to be added (adjust wait time as necessary)
    cy.wait(1000);
    
    cy.get('.todo').should('have.length', 4);
  });

  it('checks first todo', () => {
    cy.get('.btn-check')
      .first()
      .click();

    // Ensure the first todo is checked (adjust wait time as necessary)
    cy.wait(500);
    
    cy.get('.todo')
      .first()
      .should('have.css', 'text-decoration')
      .and('match', /line-through/);
  });

  it('removes last 2 todos', () => {
    cy.get('.btn-close')
      .last()
      .click();

    cy.get('.btn-close')
      .last()
      .click();
    
    // Wait for todos to be removed (adjust wait time as necessary)
    cy.wait(1000);
    
    cy.get('.todo').should('have.length', 2);
  });
});

  