import React from 'react'
import Title from './Title'
import Subheader from './Subheader'
import DateAndTime from './DateAndTime'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()

  return (
    <div className="h-96 bg-black px-36 py-24">
        <DateAndTime/>
        <Title/>
       {router.asPath === '/' ? <Subheader/> : null}
    </div>
  )
}

export default Header