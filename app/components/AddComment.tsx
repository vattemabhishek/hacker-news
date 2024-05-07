import React from 'react'

const AddComment = () => {
  return (
    <div className='flex-col mt-3'>
      <div className='ml-5'>
        <form action='comment'>
          <textarea
            name='text'
            className='w-1/4 h-24 resize max-w-[70vw]'
          ></textarea>
        </form>
      </div>
      <div>
        <button
          className='border border-spacing-1 border-cyan-400 bg-gray-50 ml-5 rounded-lg pl-1 pr-1 text-sm'
          onClick={() => {}}
        >
          add comment
        </button>
      </div>
    </div>
  )
}

export default AddComment
