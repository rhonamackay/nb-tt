import React from 'react'
import StarringTable from './StarringTable'

const cast = [
      {
          "person": {
              "id": 9899,
              "url": "https://www.tvmaze.com/people/9899/greg-cipes",
              "name": "Greg Cipes",
              "country": {
                  "name": "United States",
                  "code": "US",
                  "timezone": "America/New_York"
              },
              "birthday": "1980-01-04",
              "deathday": null,
              "gender": "Male",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/46/115648.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/46/115648.jpg"
              },
              "updated": 1661682793,
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/people/9899"
                  }
              }
          },
          "character": {
              "id": 87370,
              "url": "https://www.tvmaze.com/characters/87370/teen-titans-go-beast-boy",
              "name": "Beast Boy",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/237950.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/237950.jpg"
              },
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/characters/87370"
                  }
              }
          },
          "self": false,
          "voice": true
      },
      {
          "person": {
              "id": 38639,
              "url": "https://www.tvmaze.com/people/38639/hynden-walch",
              "name": "Hynden Walch",
              "country": {
                  "name": "United States",
                  "code": "US",
                  "timezone": "America/New_York"
              },
              "birthday": "1971-02-01",
              "deathday": null,
              "gender": "Female",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/154/385482.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/154/385482.jpg"
              },
              "updated": 1670419658,
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/people/38639"
                  }
              }
          },
          "character": {
              "id": 87371,
              "url": "https://www.tvmaze.com/characters/87371/teen-titans-go-starfire",
              "name": "Starfire",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/237959.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/237959.jpg"
              },
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/characters/87371"
                  }
              }
          },
          "self": false,
          "voice": true
      },
      {
          "person": {
              "id": 13082,
              "url": "https://www.tvmaze.com/people/13082/khary-payton",
              "name": "Khary Payton",
              "country": {
                  "name": "United States",
                  "code": "US",
                  "timezone": "America/New_York"
              },
              "birthday": "1972-05-16",
              "deathday": null,
              "gender": "Male",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/135/339614.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/135/339614.jpg"
              },
              "updated": 1676069380,
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/people/13082"
                  }
              }
          },
          "character": {
              "id": 87372,
              "url": "https://www.tvmaze.com/characters/87372/teen-titans-go-cyborg",
              "name": "Cyborg",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/237951.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/237951.jpg"
              },
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/characters/87372"
                  }
              }
          },
          "self": false,
          "voice": true
      },
      {
          "person": {
              "id": 25427,
              "url": "https://www.tvmaze.com/people/25427/scott-menville",
              "name": "Scott Menville",
              "country": {
                  "name": "United States",
                  "code": "US",
                  "timezone": "America/New_York"
              },
              "birthday": "1971-02-12",
              "deathday": null,
              "gender": "Male",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/10/25515.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/10/25515.jpg"
              },
              "updated": 1676214592,
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/people/25427"
                  }
              }
          },
          "character": {
              "id": 87373,
              "url": "https://www.tvmaze.com/characters/87373/teen-titans-go-robin",
              "name": "Robin",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/237960.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/237960.jpg"
              },
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/characters/87373"
                  }
              }
          },
          "self": false,
          "voice": true
      },
      {
          "person": {
              "id": 615,
              "url": "https://www.tvmaze.com/people/615/tara-strong",
              "name": "Tara Strong",
              "country": {
                  "name": "Canada",
                  "code": "CA",
                  "timezone": "America/Halifax"
              },
              "birthday": "1973-02-12",
              "deathday": null,
              "gender": "Female",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/154/387468.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/154/387468.jpg"
              },
              "updated": 1676590352,
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/people/615"
                  }
              }
          },
          "character": {
              "id": 87374,
              "url": "https://www.tvmaze.com/characters/87374/teen-titans-go-raven",
              "name": "Raven",
              "image": {
                  "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/95/237949.jpg",
                  "original": "https://static.tvmaze.com/uploads/images/original_untouched/95/237949.jpg"
              },
              "_links": {
                  "self": {
                      "href": "https://api.tvmaze.com/characters/87374"
                  }
              }
          },
          "self": false,
          "voice": true
      }
  ]

describe('<StarringTable />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StarringTable cast={cast} />)
  })
})