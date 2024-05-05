import TopNewsList from '../components/TopNewsList'

export default function Home() {
  const newStoriesUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json'
  return (
    <div className='max-w-[75vw] mx-auto'>
      <TopNewsList url={newStoriesUrl} />
    </div>
  )
}
