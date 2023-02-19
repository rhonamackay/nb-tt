export {}

describe('Landing page desktop tests', () => {
  it('Loads the page and TV schedule', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="show-card"]')
      .should('have.length.at.least', 1)
      .should('have.length.at.most', 20)
  })

  it('Loads pagination options', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="page-num"]')
      .should('have.length.at.least', 1)
      .eq(0)
      .should('have.class', 'text-green')
      .should('have.class', 'hover:text-yellow')
  })

  it('Show card links to show page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="show-card"]')
      .eq(0)
      .click()
      .url()
      .should('include', '/show?id=')
  })
})

describe('Landing page mobile tests', () => {
  beforeEach(() => {
    cy.viewport('iphone-8')
  })

  it('Loads the page and TV schedule on mob view', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="show-card"]')
      .should('have.length.at.least', 1)
      .should('have.length.at.most', 20)
  })

  it('Loads pagination options on mob view', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="page-num"]')
      .should('have.length.at.least', 1)
      .eq(0)
      .should('have.class', 'text-green')
      .should('have.class', 'hover:text-yellow')
  })

  it('Show card links to show page on mob view', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="show-card"]')
      .eq(0)
      .click()
      .url()
      .should('include', '/show?id=')
  })
})
