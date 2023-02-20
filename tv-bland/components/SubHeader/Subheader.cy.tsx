import React from 'react'
import Subheader from './Subheader'

describe('<Subheader />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Subheader />)
  })
})