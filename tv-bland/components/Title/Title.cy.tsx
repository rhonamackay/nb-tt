import React from 'react'
import Title from './Title'

describe('<Title />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Title />)
  })
})