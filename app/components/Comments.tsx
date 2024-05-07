'use client'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
//import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { Context } from '@ckeditor/ckeditor5-core'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CommentApiResponse, StoryApiResponse } from '../type'
import { fetchTime } from './DisplayStory'

interface Props {
  story: StoryApiResponse | CommentApiResponse
  nextParentRef?: number
}

const Comments = ({ story, nextParentRef }: Props) => {
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
      {commentsObjArr.map((comment: CommentApiResponse, idx, arr) => {
        const prev = arr[idx - 1]
        const next = arr[idx + 1]
        const nextId = next ? next.id : nextParentRef
        return (
          <div className='ml-5 font-Verdana'>
            <div className='flex-col gap-5 align-middle justify-start pl-5  text-sm mt-3  text-black'>
              <div
                id={`${comment.id}`}
                className='flex gap-3 text-xs font-light '
              >
                <a href='' className='hover:underline'>
                  {comment.by}
                </a>
                <p>|</p>
                <a href='' className='hover:underline'>
                  {fetchTime(comment.time)}
                </a>
                <p>|</p>
                <a href='' className='hover:underline'>
                  parent
                </a>
                <p>|</p>
                {prev ? (
                  <>
                    <a href={`#${`${prev.id}`}`} className='hover:underline'>
                      prev{' '}
                    </a>
                    <p>|</p>
                  </>
                ) : null}

                {nextId ? (
                  <a href={`#${nextId}`} className='hover:underline'>
                    {' '}
                    next
                  </a>
                ) : null}
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: comment.text,
                }}
              />

              <a href='' className='underline'>
                reply
              </a>
            </div>
            <div>
              {comment.kids ? (
                comment.kids.length ? (
                  <Comments
                    story={comment}
                    nextParentRef={nextId || nextParentRef}
                  />
                ) : null
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
