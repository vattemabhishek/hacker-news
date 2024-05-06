'use client'
import AddComment from '@/app/components/AddComment'
import Comments from '@/app/components/Comments'
import DisplayStory from '@/app/components/DisplayStory'
import { StoryApiResponse } from '@/app/type'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home({ params }) {
  const itemId = params.itemId
  const [storyInfo, setStoryInfo] = useState<StoryApiResponse>()

  const getStoryInfo = async (id: string) => {
    const response = await axios.get<StoryApiResponse>(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    )
    setStoryInfo(response.data)
  }

  useEffect(() => {
    if (itemId) {
      getStoryInfo(itemId)
    }
  }, [itemId])

  return (
    <div className='max-w-[75vw] mx-auto'>
      <div className=' bg-orange-50 mr-3 ml-3 border-collapse border-2 border-solid w-full flex-start list-inside'>
        {storyInfo ? (
          <div>
            <DisplayStory story={storyInfo} />
            <Comments story={storyInfo} />{' '}
          </div>
        ) : null}
      </div>
    </div>
  )
}
