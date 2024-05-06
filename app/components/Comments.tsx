import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const Comments = () => {
  const fetchTime = (etime: number) => {
    dayjs.extend(relativeTime)
    return dayjs.unix(etime).fromNow()
  }
  return (
    <>
      <div className='flex gap-5 align-middle justify-start pl-5 font-light text-xs '>
        <a href=''>{story.by}</a>
        <a href=''>{fetchTime(story.time)}</a>
        <p>|</p>
        <a href=''>parent</a>
        <p>|</p>
        <a href=''>context</a>
        <p>| on:</p>
        <a href=''>{story.title}</a>
      </div>
      <div className='block'>
        <p>{story.comment}</p>
      </div>
    </>
  )
}

export default Comments
