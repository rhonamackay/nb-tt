import React from 'react'
import Card from './Card'

// {
//   "id": 8566,
//   "url": "https://www.tvmaze.com/shows/8566/good-morning-america",
//   "name": "Good Morning America",
//   "type": "Talk Show",
//   "language": "English",
//   "genres": [],
//   "status": "Running",
//   "runtime": 120,
//   "averageRuntime": 117,
//   "premiered": "1975-11-03",
//   "ended": null,
//   "officialSite": "http://abc.go.com/shows/good-morning-america",
//   "schedule": {
//       "time": "07:00",
//       "days": [
//           "Monday",
//           "Tuesday",
//           "Wednesday",
//           "Thursday",
//           "Friday",
//           "Saturday",
//           "Sunday"
//       ]
//   },
//   "rating": {
//       "average": null
//   },
//   "weight": 83,
//   "network": {
//       "id": 3,
//       "name": "ABC",
//       "country": {
//           "name": "United States",
//           "code": "US",
//           "timezone": "America/New_York"
//       },
//       "officialSite": "https://abc.com/"
//   },
//   "webChannel": null,
//   "dvdCountry": null,
//   "externals": {
//       "tvrage": null,
//       "thetvdb": 70710,
//       "imdb": "tt0072506"
//   },
//   "image": {
//       "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/359/898290.jpg",
//       "original": "https://static.tvmaze.com/uploads/images/original_untouched/359/898290.jpg"
//   },
//   "summary": "<p><b>Good Morning America</b> is a two-hour, live program anchored by Robin Roberts, George Stephanopoulos and Lara Spencer. Amy Robach is the news anchor, and Ginger Zee is the chief meteorologist. The morning news program airs MONDAY-FRIDAY (7:00-9:00 a.m. EdT), on the ABC Television Network.</p>",
//   "updated": 1676673261,
//   "_links": {
//       "self": {
//           "href": "https://api.tvmaze.com/shows/8566"
//       },
//       "previousepisode": {
//           "href": "https://api.tvmaze.com/episodes/2488393"
//       },
//       "nextepisode": {
//           "href": "https://api.tvmaze.com/episodes/2492204"
//       }
//   }
// }

describe('<Card />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Card title={"Good Morning America"} img={"https://static.tvmaze.com/uploads/images/medium_portrait/359/898290.jpg"} rating={{"average": null }} id={8566} />)
  })
})