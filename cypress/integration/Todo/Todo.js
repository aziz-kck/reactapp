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
}) */
  describe('Cypress Test on Todo Project', function() {
    before(() => {
      cy.visit('/');
      cy.wait(1000); // Wait for 1 second after page load
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
      
      cy.wait(500); // Wait for 0.5 seconds after adding new todo
      cy.get('.todo').should('have.length', 4);
    });
  
    it('checks first todo', () => {
      cy.get('.btn-check')
        .first()
        .click();
  
      cy.wait(500); // Wait for 0.5 seconds after checking first todo
      cy.get('.todo')
        .first()
        .should('have.css', 'text-decoration')
        .and('match', /line-through/);
    });
  
    it('removes last 2 todos', () => {
      cy.get('.btn-close')
        .last()
        .click();
  
      cy.wait(500); // Wait for 0.5 seconds after removing first todo
      cy.get('.btn-close')
        .last()
        .click();
  
      cy.wait(500); // Wait for 0.5 seconds after removing second todo
      cy.get('.todo').should('have.length', 2);
    });
  });
  
  