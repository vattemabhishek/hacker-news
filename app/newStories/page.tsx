import TopNewsList from '../components/TopNewsList'
import { newStoriesUrl } from '../url'

export default function Home() {
  const url = newStoriesUrl
  return (
    <div className='max-w-[75vw] mx-auto'>
      <TopNewsList url={url} />
    </div>
  )
}
