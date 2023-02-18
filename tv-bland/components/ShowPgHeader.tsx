import React from 'react'
import Title from './Title'
import Subheader from './Subheader'
import { useRouter } from 'next/router'

function ShowPgHeader() {
  const router = useRouter()

  return (
    <div className="md:h-96 bg-black md:px-36 md:py-20 flex flex-col flex-wrap content-center">
        <Title/>
    </div>
  )
}

export default ShowPgHeader