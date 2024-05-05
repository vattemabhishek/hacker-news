import TopNewsList from '../components/TopNewsList'

export default function Home() {
  const askStoriesUrl = 'https://hacker-news.firebaseio.com/v0/askstories.json'
  return (
    <div className='max-w-[75vw] mx-auto'>
      <TopNewsList url={askStoriesUrl} />
    </div>
  )
}
