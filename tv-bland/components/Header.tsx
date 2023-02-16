import React from 'react'
import Title from './Title'
import Subheader from './Subheader'
import DateAndTime from './DateAndTime'

function Header() {
  return (
    <div className="h-96 bg-black px-36 py-24">
        <DateAndTime/>
        <Title/>
        <Subheader/>
    </div>
  )
}

export default Header