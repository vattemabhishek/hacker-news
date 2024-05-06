'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { StoryApiResponse } from '../type'

interface Props {
  url: string
}

const TopNewsList = ({ url }: Props) => {
  const [pageNumber, SetPageNumber] = useState(1)
  const [objArray, setObjArray] = useState<StoryApiResponse[]>([])

  const fetchTopNews = async () => {
    const items = await axios.get(url)
    const testTopStories = items.data
    const itemList = testTopStories
      .slice((pageNumber - 1) * 10, pageNumber * 10)
      .map((topStory: number) =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${topStory}.json`)
      )
    const result = await Promise.all(itemList)
    const arr = result.map((item) => item.data)
    setObjArray(arr)
  }

  useEffect(() => {
    fetchTopNews()
  }, [pageNumber])

  const fetchTime = (etime: number) => {
    dayjs.extend(relativeTime)
    return dayjs.unix(etime).fromNow()
  }

  const fetchUrl = (url: string) => {
    if (!url) return
    const reg = new RegExp('https://')
    const newUrl = url.replace(reg, '')
    const updatedUrl = newUrl.slice(0, newUrl.indexOf('/'))
    return updatedUrl
  }

  const changePage = (score: number) => {
    score === 1 ? SetPageNumber(pageNumber + 1) : SetPageNumber(pageNumber - 1)
  }

  return (
    <>
      <div className='bg-orange-50 mr-3 ml-3 border-collapse border-2 border-solid w-full flex-start list-decimal list-inside '>
        <ol
          start={(pageNumber - 1) * 10 + 1}
          className='   list-decimal list-inside '
        >
          {objArray.map((story) => {
            return (
              <li key={story.id}>
                <span>
                  <a href={story.url} className=' mr-10 font-sans text-sm'>
                    {story.title}
                  </a>
                  <a href={story.url} className='text-blue-400 text-xs'>
                    {fetchUrl(story.url)}
                  </a>
                </span>
                <div className='flex gap-5 align-middle justify-start pl-5 font-light text-xs '>
                  {story.score < 2 ? (
                    <a href='/newStories'>{story.score} point by</a>
                  ) : (
                    <a href=''>{story.score} points by</a>
                  )}
                  <a href='' className='font-normal'>
                    {story.by}
                  </a>
                  <a href=''>{fetchTime(story.time)}</a>
                  <p>|</p>
                  <a href=''>hide</a>
                  <p>|</p>
                  {story.descendants < 2 ? (
                    story.descendants === 0 ? (
                      <a href=''>no comments</a>
                    ) : (
                      <a href=''>1 comment</a>
                    )
                  ) : (
                    <a href=''>{story.descendants} comments</a>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
        <span>
          {pageNumber > 1 && (
            <button
              onClick={() => changePage(0)}
              value='0'
              className='text-xs ml-5 mt-5 border-1 bg-slate-100 border-solid border-black'
            >
              Prev
            </button>
          )}
          <button
            onClick={() => changePage(1)}
            value='1'
            className='text-xs ml-3 border-1 bg-slate-100 border-solid border-black'
          >
            Next
          </button>
        </span>
        <div className='bg-orange-400   w-full'>
          <div className='ml-3 mr-3 h-1'></div>
        </div>
      </div>
    </>
  )
}

export default TopNewsList
