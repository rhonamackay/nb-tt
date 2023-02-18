import React from 'react'
import Title from './Title'
import Subheader from './Subheader'

function Header() {
  return (
    <div className="md:h-96 bg-black md:px-36 md:py-20 px-10 pt-10 pb-16 mb-5 flex flex-col flex-wrap content-center">
        <Title/>
        <Subheader/>
    </div>
  )
}

export default Header