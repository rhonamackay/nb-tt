import React from 'react'
import ShowDisplay from './ShowDisplay'

describe('<ShowDisplay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ShowDisplay />)
  })
})