import React, { useEffect, useState } from 'react'
import { ScheduleDataType } from '@/types'
import Card from './Card'

function ShowDisplay() {
  const [scheduledShows, setScheduledShows] = useState<ScheduleDataType>([])

  useEffect(() => {
    async function getSchedule() {
      const response = await fetch('https://api.tvmaze.com/schedule?country=GB')
      const data = await response.json()
      setScheduledShows(data)
    }
    getSchedule()
  }, [])

  useEffect(()=> {
    console.log(scheduledShows)
  }, [scheduledShows])

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