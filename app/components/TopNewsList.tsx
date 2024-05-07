'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

import { StoryApiResponse } from '../type'
import DisplayItem from './DisplayStory'

interface Props {
  url: string
}

type TopStoriesResponse = number[]

const TopNewsList = ({ url }: Props) => {
  const [stories, setStories] = useState<TopStoriesResponse>([])
  const [pageNumber, SetPageNumber] = useState(1)
  const [objArray, setObjArray] = useState<StoryApiResponse[]>([])

  const fetchTopNews = async () => {
    const items = await axios.get<TopStoriesResponse>(url)
    setStories(items.data)
  }

  useEffect(() => {
    fetchTopNews()
  }, [])

  const fetchStories = async (storyIds: number[]) => {
    const itemList = storyIds.map((topStory: number) =>
      axios.get<StoryApiResponse>(
        `https://hacker-news.firebaseio.com/v0/item/${topStory}.json`
      )
    )
    const result = await Promise.all(itemList)
    const arr = result.map((item) => item.data)
    setObjArray(arr)
  }

  useEffect(() => {
    if (stories.length) {
      const currentStoryIds = stories.slice(
        (pageNumber - 1) * 10,
        pageNumber * 10
      )
      fetchStories(currentStoryIds)
    }
  }, [pageNumber, stories])

  const changePage = (score: number) => {
    score === 1 ? SetPageNumber(pageNumber + 1) : SetPageNumber(pageNumber - 1)
  }

  return (
    <>
      <div className='bg-orange-50 mr-3 ml-3 border-collapse border-2 border-solid w-full flex-start list-decimal list-inside font-Verdana'>
        <ol
          start={(pageNumber - 1) * 10 + 1}
          className='   list-decimal list-inside '
        >
          {objArray.map((story) => {
            return (
              // TODO: Create a component that accepts story api response as prop
              <DisplayItem story={story} />
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
