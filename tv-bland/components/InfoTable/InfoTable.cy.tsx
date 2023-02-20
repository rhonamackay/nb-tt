import React from 'react'
import InfoTable from './InfoTable'

const info = {
  network: {
    "id": 72,
    "name": "Syndication",
    "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
    },
    "officialSite": undefined
},
  schedule: {
    "time": "12:00",
    "days": [
        "Monday"
    ]
  },
  status: "Running",
  genres: "Game Show"
}

describe('<InfoTable />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InfoTable info={info} />)
  })
})