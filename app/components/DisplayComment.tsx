import React from 'react'

const DisplayComment = () => {
  return (
    <div>
      {' '}
      <div className='flex-col gap-5 align-middle justify-start pl-5 font-light text-xs mt-3'>
        <div className='flex gap-3'>
          <a href=''>{comment.by}</a>
          <a href=''>{fetchTime(comment.time)}</a>
          <p>|</p>
          <a href=''>next [-]</a>
        </div>
        <div className='block'>
          <p>{comment.text}</p>
        </div>
        <a href=''>reply</a>
      </div>
    </div>
  )
}

export default DisplayComment
