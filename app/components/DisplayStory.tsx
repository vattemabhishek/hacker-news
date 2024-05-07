import React from 'react'
import { StoryApiResponse } from '../type'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

interface Props {
  story: StoryApiResponse
}

const DisplayItem = ({ story }: Props) => {
  return (
    <div className='font-Verdana'>
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
              <a href={`/item/${story.id}`}>1 comment</a>
            )
          ) : (
            <a href={`/item/${story.id}`}>{story.descendants} comments</a>
          )}
        </div>
      </li>
    </div>
  )
}
const fetchUrl = (url: string) => {
  if (!url) return
  const reg = new RegExp('https://')
  const reg1 = new RegExp('http://')
  const newUrl = url.replace(reg, '').replace(reg1, '')

  const updatedUrl = newUrl.slice(0, newUrl.indexOf('/'))
  return updatedUrl
}

export const fetchTime = (etime: number) => {
  dayjs.extend(relativeTime)
  return dayjs.unix(etime).fromNow()
}

export default DisplayItem
