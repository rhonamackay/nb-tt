import { Cast } from '@/types'
import React from 'react'

type starringPropsType = {
    cast: Cast[]
}

function StarringTable( { cast }: starringPropsType) {
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