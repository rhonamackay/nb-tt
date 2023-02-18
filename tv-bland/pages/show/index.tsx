import InfoTable from '@/components/InfoTable'
import StarringTable from '@/components/StarringTable'
import { individualShowDataType } from '@/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

type showPagePropsType = {
  show: individualShowDataType
}

type contextType = {
    query: {
      id: string
    }}

//Gets show data on page load based on id passed through url
export async function getServerSideProps(context: contextType) {
   const res = await fetch(`https://api.tvmaze.com/shows/${context.query.id}?embed=cast`)
   const data = await res.json()

  return { 
    props: {show: data}
  }
}

function page({ show }: showPagePropsType) {
  const img = show.image
  const title = show.name
  const rating = show.rating.average
  const summary = show.summary.replace( /(<([^>]+)>)/ig, '')
  const info = {
    network: show.network,
    schedule: show.schedule,
    status: show.status,
    genres: show.type 
  }
  const cast = show._embedded.cast
  const [roundRating, setRoundRating] = useState(0)
  const [pointRating, setPointRating] = useState(0)
  
  useEffect(() => {
    //converts rating to nuber /5 and provides round number for * display
    function convertRating() {
      if (rating !== null) {
        setRoundRating(Math.ceil(Number(rating) / 2))
        setPointRating(Number(rating) / 2)
      }
    }
    convertRating()
  })

  return (
    <div className="px-36">
      <div className="mt-neg20rem text-green flex flex-row gap-5 pb-3.5">
          {img ? <Image
            src={img.medium}
            alt={title}
            width={128}
            height={192}
            className="h-48 w-32 border-4 border-green"/> : <div className="bg-green h-48 w-32 text-black p-3">No image found</div>}
        <div className='flex flex-col'>
          {rating ? <div>
            <span className="text-magenta text-l">{"*".repeat(roundRating)}</span>
            <span className="text-white text-l">{"*".repeat(5 - roundRating)}</span> {pointRating}/5
          </div> : <span>No rating available</span> }
          <h2 className="text-3xl text-cyan">{title}</h2>
          <p className="text-lg">{summary}</p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <InfoTable info={info}/>
        <StarringTable cast={cast}/> 
      </div>  
    </div>
  )
}

export default page