import React, { useEffect, useState } from 'react'
import { EpisodeType, ShowType } from '@/types'
import Card from './Card'

function ShowDisplay() {
  const [scheduledShows, setScheduledShows] = useState<ShowType[]>([])
  const [displayedShows, setDisplayedShows] = useState<ShowType[]>([])
  const [pagesArr, setpagesArr] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  
  useEffect(() => {
    async function getSchedule() {
      //Fetches TV schedule data from API
      const response = await fetch('https://api.tvmaze.com/schedule?country=GB')
      const data = await response.json()

      //removes unecessary episode info and duplicate shows
      const justShowData = data.map((ep: EpisodeType) => ep.show)
      const showDataNoDups: ShowType[] = []
      const showIDs: number[] = []
      justShowData.forEach((show: ShowType) => {
        if (!showIDs.includes(show.id)) {
          showIDs.push(show.id)
          showDataNoDups.push(show)
        }
      })
      setScheduledShows(showDataNoDups)
    }
    getSchedule()
  }, [])

  //Handles pagination when new data fetched
  useEffect(() => {
    if (scheduledShows.length > 20) {
      const first20Shows = scheduledShows.slice(0, 20)
      setDisplayedShows(first20Shows)
      const pagesNum = scheduledShows.length/20
      const tempPagesArr = []
      for (let i = 1; i<=pagesNum; i++) {
        tempPagesArr.push(i)
      }
      setpagesArr(tempPagesArr)
    } 
  }, [scheduledShows])

 //Handles pagination when new page clicked 
 function handlePageChange(e: React.MouseEvent<HTMLInputElement>) {
    const page = e.target as HTMLInputElement
    const newPageNumber:number = Number(page.innerHTML)
    setCurrentPage(newPageNumber)
    const newShowArray = scheduledShows.slice(newPageNumber*20, newPageNumber*20+20)
    setDisplayedShows(newShowArray)
 }

  return (
    <div className='h-5/6 px-36 mt-neg7rem'>
        <h2 className='text-magenta text-2xl mb-2.5'>Shows coming up</h2>
        <div className="w-full flex flex-row flex-wrap gap-3 items-stretch justify-evenly mb-5">
            {displayedShows.length > 0 ? displayedShows.map((show, index) => <Card key={index} id={show.id} title={show.name} img={show.image ? show.image.medium : 'placeholder'} rating={show.rating}/>) : <h2>Sorry, I couldn&apos;t find any shows for you</h2>}
        </div>
        <div className="flex flex-row justify-center gap-3 underline text-xl">
          {pagesArr.length > 0 ? pagesArr.map((page) => {
            if(page===currentPage) {
              return <h2 key={page} className="hover:text-yellow text-green" onClick={handlePageChange}>{page}</h2>
            } else {
              return <h2 key={page} className="hover:text-yellow" onClick={handlePageChange}>{page}</h2>
            }
            })
          : null}
        </div>
    </div>
  )
}

export default ShowDisplay