import React from 'react'
import DateAndTime from './DateAndTime'

describe('<DateAndTime />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DateAndTime />)
  })
})