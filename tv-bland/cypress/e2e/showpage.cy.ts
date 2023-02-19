export {}

describe('Show page desktop tests', () => {
    it('Loads a show page with info from api', () => {
        cy.visit('http://localhost:3000/show?id=747')
            .get('[data-cy="title"]')
            .contains('Naked and Afraid')
            .get('[data-cy="rating"]')
            .contains('3.5/5')
    })

    it('Displays info table correctly', () => {
        cy.visit('http://localhost:3000/show?id=83')
            .get('[data-cy="info-table-body"]')
            .within(() => {
                cy.get('td').eq(0).contains('Shown on')                    
                cy.get('td').eq(5).contains('Running')
            })
    })

    it('Displays starring table correctly', () => {
        cy.visit('http://localhost:3000/show?id=288')
            .get('[data-cy="starring-table-body"]')
            .within(() => {
                cy.get('td').eq(0).contains("Ryan Seacrest")
                cy.get('td').eq(1).contains("Host")
            })
    })
})

describe('Show page mobile tests', () => {
    beforeEach(() => {
        cy.viewport('iphone-8')
    })
    it('Loads a show page on mob view', () => {
        cy.visit('http://localhost:3000/show?id=747')
            .get('[data-cy="title"]')
            .contains('Naked and Afraid')
            .get('[data-cy="rating"]')
            .contains('3.5/5')
    })

    it('Displays info table correctly on mob view', () => {
        cy.visit('http://localhost:3000/show?id=83')
            .get('[data-cy="info-table-body"]')
            .within(() => {
                cy.get('td').eq(0).contains('Shown on')                    
                cy.get('td').eq(5).contains('Running')
            })
    })

    it('Displays starring table correctly on mob view', () => {
        cy.visit('http://localhost:3000/show?id=288')
            .get('[data-cy="starring-table-body"]')
            .within(() => {
                cy.get('td').eq(0).contains("Ryan Seacrest")
                cy.get('td').eq(1).contains("Host")
            })
    })

})