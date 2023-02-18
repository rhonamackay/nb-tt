import React, { useState, useEffect } from 'react'

function DateAndTime() {
    const [date, setDate] = useState<Date | undefined>(undefined)

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

  return (
    <p className='flex flex-row justify-end gap-2 max-w-screen-xl'>
        {date ? <>
                <span className="text-green">{date.toLocaleDateString(undefined, {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span> <span className="text-yellow">{date.toLocaleTimeString()}</span> 
            </>
            : 
            <span className="text-black">date&time placeholder</span>
            }
    </p>
  )
}

export default DateAndTime