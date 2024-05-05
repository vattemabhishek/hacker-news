export interface StoryApiResponse {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}

export interface UserApiResponse {
  about: string
  created: number
  delay: number
  id: string
  karma: number
  submitted: number[]
}

export interface CommentApiResponse {
  by: string
  id: number
  kids: number[]
  parent: number
  text: string
  time: number
  type: string
}

export interface AskApiResponse {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  text: string
  time: number
  title: string
  type: string
}

export interface JobApiResponse {
  by: string
  id: number
  score: number
  text: string
  time: number
  title: string
  type: string
  url: string
}
