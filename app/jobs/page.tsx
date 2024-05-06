import TopNewsList from '../components/TopNewsList'
import { jobStoriesUrl } from '../url'

export default function Home() {
  const url = jobStoriesUrl
  return (
    <div className='max-w-[75vw] mx-auto'>
      <TopNewsList url={url} />
    </div>
  )
}
