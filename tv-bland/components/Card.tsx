import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type CardPropsType = {
  title: string,
  img: string,
  rating: any,
  id: number
}


function Card({title, img, rating, id}: CardPropsType) {
  const [convertedRating, setConvertedRating] = useState<number | null>(null)

  useEffect(() => {
    //converts each shows rating from number /10 to number /5 and rounds down
    function convertRating() {
      if (rating.average !== null) {
        setConvertedRating(Math.ceil(Number(rating.average) / 2))
      }
    }
    convertRating()
  }, [])

  return (
    <div data-cy="show-card">
        <Link href={{
          pathname: '/show',
          query: {id:String(id)}
        }}>
          {img === 'placeholder' ? <div className="bg-green h-48 w-32 text-black p-3">No image found</div> 
            :
          <Image
            src={img}
            alt={title}
            width={128}
            height={192}
            className="h-48 w-32 border-4 border-yellow hover:border-red hover:scale-125"/>}
          {convertedRating ? 
            <div>
              <span className="text-magenta text-l">{"*".repeat(convertedRating)}</span>
              <span className="text-white text-l">{"*".repeat(5 - convertedRating)}</span>
            </div>
            : 
            null}
          <p className="text-cyan max-w-[128px] text-xl hover:bg-red">{title}</p>
        </Link>
    </div>
  )
}

export default Card