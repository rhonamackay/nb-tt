import React from 'react'
import Title from './Title'
import Subheader from './Subheader'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()

  return (
    <div className="h-96 bg-black px-36 py-20 flex flex-col flex-wrap content-center">
        <Title/>
       {router.asPath === '/' ? <Subheader/> : null}
    </div>
  )
}

export default Header