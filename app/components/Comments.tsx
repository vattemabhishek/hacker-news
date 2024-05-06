'use client'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import axios from 'axios'
import { StoryApiResponse, CommentApiResponse } from '../type'
import { fetchTime } from './DisplayStory'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

interface Props {
  story: StoryApiResponse | CommentApiResponse
}

const Comments = ({ story }: Props) => {
  const [commentsObjArr, setComments] = useState<CommentApiResponse[]>([])
  console.log(story.kids)
  const fetchComments = async (commentIds: number[]) => {
    const commentsList = commentIds.map((comment: number) =>
      axios.get<CommentApiResponse>(
        'https://hacker-news.firebaseio.com/v0/item/' +
          comment +
          '.json?print=pretty'
      )
    )
    console.log(commentsList)
    const res = await Promise.all(commentsList)
    const arr = res.map((res) => res.data)
    setComments(arr)
  }

  useEffect(() => {
    fetchComments(story.kids)
  }, [])

  console.log(commentsObjArr)

  return (
    <div>
      {commentsObjArr.map((comment: CommentApiResponse) => {
        return (
          <div className='ml-8'>
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
            <div>{comment.kids && <Comments story={comment} />}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
