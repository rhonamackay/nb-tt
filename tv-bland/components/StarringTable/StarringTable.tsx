import { Cast } from '@/types'
import React from 'react'

type starringPropsType = {
    cast: Cast[]
}

function StarringTable( { cast }: starringPropsType) {
    if (cast.length === 0 ) {
        cast.push({
            "person": {
                "id": 9899,
                "url": "https://www.tvmaze.com/people/9899/greg-cipes",
                "name": "    ",
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
                "name": "No cast info available",
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
        })
    }
    
    const mainCast= cast.slice(0, 4)

  return (
        <table className="md:table-fixed table-auto text-white md:w-2/5 md:pt-0 pt-5">
            <thead className="text-2xl">
                <tr>
                    <th className="md:w-1/3">
                        Starring
                    </th>
                    <th className="md:w-2/3">
                        {'    '}
                    </th>
                </tr>
            </thead>
            <tbody data-cy="starring-table-body" className="bg-cyan text-black">
                {mainCast.map((person, index) => {
                    return <tr key={index} className='even:bg-blue even:text-white'>
                    <td >{person.person.name}</td>
                    <td >{person.character.name}</td>
                    </tr>
                })}
            </tbody>
        </table>
  )
}

export default StarringTable