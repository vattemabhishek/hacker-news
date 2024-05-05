import TopNewsList from '../components/TopNewsList'

export default function Home() {
  const jobStoriesUrl = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
  return (
    <div className='max-w-[75vw] mx-auto'>
      <TopNewsList url={jobStoriesUrl} />
    </div>
  )
}
