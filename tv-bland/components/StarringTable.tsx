import { Cast } from '@/types'
import React from 'react'

type starringPropsType = {
    cast: Cast[]
}

function StarringTable( { cast }: starringPropsType) {
    const mainCast = cast.slice(0, 4)

  return (
        <table className="table-fixed text-white w-2/5">
            <thead className="text-2xl">
                <tr>
                    <th className="w-1/3">
                        Starring
                    </th>
                    <th className="w-2/3">
                        {'    '}
                    </th>
                </tr>
            </thead>
            <tbody className="bg-cyan text-black">
                {mainCast.map((person, index) => {
                    return <tr key={index} className='border border-blue odd:bg-blue odd:text-white'>
                        <td className="w-1/3">{person.person.name}</td>
                        <td className="w-2/3">{person.character.name}</td>
                    </tr>
                })}
            </tbody>
        </table>
  )
}

export default StarringTable