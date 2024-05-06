import TopNewsList from '../components/TopNewsList'
import { showStoriesUrl } from '../url'

export default function Home() {
  const url = showStoriesUrl

  return (
    <div className='max-w-[75vw] mx-auto'>
      <TopNewsList url={url} />
    </div>
  )
}
