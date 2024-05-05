import NavBar from '@/app/NavBar'
import TopNewsList from './components/TopNewsList'

export default function Home() {
  const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json'
  return (
    <div className='max-w-[75vw] mx-auto'>
      <TopNewsList url={topStoriesUrl} />
    </div>
  )
}
