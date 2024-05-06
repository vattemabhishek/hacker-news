import TopNewsList from '../components/TopNewsList'
import { askStoriesUrl } from '../url'

export default function Home() {
  const url = askStoriesUrl
  return (
    <div className='max-w-[75vw] mx-auto'>
      <TopNewsList url={url} />
    </div>
  )
}
