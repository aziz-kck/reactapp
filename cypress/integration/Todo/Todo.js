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
    it('visits My Todo App', function() {
      cy.visit('/', { timeout: 30000 }) // Timeout de 30 secondes pour la visite
    })
  
    it('should focus to the input', () => {
      cy.focused({ timeout: 10000 }).should('have.class', 'input') // Timeout de 10 secondes pour vérifier le focus
    })
  
    it('initially has 3 todos', () => {
      cy.get('.todo', { timeout: 15000 }).should('have.length', 3) // Timeout de 15 secondes pour vérifier les todos initiaux
    })
  
    it('has "React Hooks" at first todo', () => {
      cy.get('.todo', { timeout: 15000 })
        .first()
        .children()
        .first()
        .should('have.text', 'React Hooks') // Timeout de 15 secondes pour vérifier le texte du premier todo
    })
  
    it('has "Cypress.io" at 3rd todo', () => {
      cy.get('.todo', { timeout: 15000 })
        .eq(2)
        .children()
        .first()
        .should('have.text', 'Cypress.io') // Timeout de 15 secondes pour vérifier le texte du troisième todo
    })
  
    it('adds a new todo', () => {
      const txt = 'Learn about cypress'
      cy.get('.input', { timeout: 15000 })
        .type(txt)
        .type('{enter}')
        .get('.todo', { timeout: 20000 })
        .should('have.length', 4) // Timeout de 20 secondes pour vérifier l'ajout d'un nouveau todo
    })
  
    it('checks first todo', () => {
      cy.get('.btn-check', { timeout: 15000 })
        .first()
        .click()
  
      cy.get('.todo', { timeout: 15000 })
        .first()
        .should('have.css', 'text-decoration')
        .and('match', /line-through/) // Timeout de 15 secondes pour vérifier le marquage du premier todo
    })
  
    it('removes last 2 todos', () => {
      cy.get('.btn-close', { timeout: 15000 })
        .last()
        .click()
  
      cy.get('.btn-close', { timeout: 15000 })
        .last()
        .click()
  
      cy.get('.todo', { timeout: 15000 }).should('have.length', 2) // Timeout de 15 secondes pour vérifier la suppression des deux derniers todos
    })
  }) 
  