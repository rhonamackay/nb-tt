import { showInfoType } from '@/types'
import React from 'react'

type infoTablePropsType = {
  info: showInfoType
}

function InfoTable({ info }: infoTablePropsType) {
  const network = info.network
  const schedule = info.schedule
  const status = info.status
  const genres = info.genres

  return (
      <table className="table-fixed text-white w-2/5">
          <thead className="text-2xl">
              <tr>
                <th className="w-1/3">Show info</th>
                <th className="w-2/3">{'   '}</th>
              </tr>
          </thead>
          <tbody className="bg-cyan text-black">
            <tr className='border border-blue odd:bg-blue odd:text-white' >
              <td>Shown on</td>
              {network ? <td >{network.name}</td> :  <td className='text-black'>unknown</td>}
            </tr>
            <tr className='border border-blue odd:bg-blue odd:text-white'>
              <td>Schedule</td>
              <td>{schedule.days.join(', ')}</td>
            </tr>
            <tr className='border border-blue odd:bg-blue odd:text-white'> 
              <td>Status</td>
              <td>{status}</td>
            </tr>
            <tr className='border border-blue odd:bg-blue odd:text-white'>
              <td>Genre</td>
              <td>{genres}</td>
            </tr>
          </tbody>
      </table>
  )
}

export default InfoTable