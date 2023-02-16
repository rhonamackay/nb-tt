import React, { useState, useEffect } from 'react'

type dateOptionsType = {
    weekday: string,
    year: string, 
    month: string,
    day: string
}

function DateAndTime() {
    const [date, setDate] = useState<Date>(new Date())
    const options:dateOptionsType = {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }

    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

  return (
    <p className='flex flex-row justify-end gap-2'>
        <span className="text-green">{date.toLocaleDateString(undefined, {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</span> <span className="text-yellow">{date.toLocaleTimeString()}</span>
    </p>
  )
}

export default DateAndTime