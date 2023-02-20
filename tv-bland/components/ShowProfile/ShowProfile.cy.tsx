import React from 'react'
import ShowProfile from './ShowProfile'

const info = {
  img: {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/359/898290.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/359/898290.jpg"
      }, 
  title: "Good Morning America",
  summary: "<p><b>Good Morning America</b> is a two-hour, live program anchored by Robin Roberts, George Stephanopoulos and Lara Spencer. Amy Robach is the news anchor, and Ginger Zee is the chief meteorologist. The morning news program airs MONDAY-FRIDAY (7:00-9:00 a.m. EdT), on the ABC Television Network.</p>",
  rating: null,
  roundRating: 0,
  pointRating: 0
}

describe('<ShowProfile />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ShowProfile info={info} />)
  })
})