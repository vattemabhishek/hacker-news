import TopNewsList from '../components/TopNewsList'

export default function Home() {
  const showStoriesUrl =
    'https://hacker-news.firebaseio.com/v0/showstories.json'
  return (
    <div className='max-w-[75vw] mx-auto'>
      <TopNewsList url={showStoriesUrl} />
    </div>
  )
}
