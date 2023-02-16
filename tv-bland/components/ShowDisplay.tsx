import React from 'react'
import Card from './Card'

function ShowDisplay() {
  return (
    <div className='h-5/6 px-36 mt-neg7rem'>
        <h2 className='text-magenta text-2xl mb-2.5'>Last Added Shows</h2>
        <div className="w-full flex flex-row flex-wrap gap-3 items-stretch justify-evenly">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default ShowDisplay