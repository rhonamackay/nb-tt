import React from 'react'
import Image from 'next/image'

type CardPropsType = {
  title: string,
  img: string,
  rating: any
}


function Card({title, img, rating}: CardPropsType) {
  return (
    <div>
        {img === 'placeholder' ? <div className="bg-green h-48 w-32 text-black">img placeholder</div> 
          :
        <Image
          src={img}
          alt={title}
          width={128}
          height={192}
          className="h-48 w-32"/>
        }
        <span>*****</span>
        <p className="text-cyan">{title}</p>
    </div>
  )
}

export default Card