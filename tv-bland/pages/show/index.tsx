import InfoTable from '@/components/InfoTable'
import StarringTable from '@/components/StarringTable'
import React from 'react'




function id() {
  return (
    <div className="px-36">
      <div className="mt-neg20rem text-green flex flex-row gap-5 pb-3.5">
        <div className='bg-green h-64 w-48'>img placeholder</div>
        <div className='flex flex-col'>
          <span>**** 4.2/5</span>
          <h2>This is the show title</h2>
          <p>show summary</p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <InfoTable/>
        <StarringTable/> 
      </div>  
    </div>
  )
}

export default id