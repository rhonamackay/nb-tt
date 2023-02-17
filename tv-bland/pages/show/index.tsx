import InfoTable from '@/components/InfoTable'
import StarringTable from '@/components/StarringTable'
import { individualShowDataType } from '@/types'
import React from 'react'

type showPagePropsType = {
  show: individualShowDataType
}

type contextType = {
    query: {
      id: string
    }
  }

//Makes fetch req to api on page load for show data based on id passed through url
export async function getServerSideProps(context: contextType) {
   const res = await fetch(`https://api.tvmaze.com/shows/${context.query.id}?embed=cast`)
   const data = await res.json()

  return { 
    props: {show: data}
  }
}



function page({ show }: showPagePropsType  ) {
  return (
    <div className="px-36">
      <div className="mt-neg20rem text-green flex flex-row gap-5 pb-3.5">
        <div className='bg-green h-64 w-48'>img placeholder</div>
        <div className='flex flex-col'>
          <span>**** 4.2/5</span>
          <h2 className="text-3xl">{show.name}</h2>
          <p>{show.summary}</p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <InfoTable/>
        <StarringTable/> 
      </div>  
    </div>
  )
}

export default page