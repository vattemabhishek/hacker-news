import NavBar from '@/app/NavBar'
import TopNewsList from './components/TopNewsList'

export default function Home() {
  return (
    <div className='max-w-[75vw] mx-auto'>
      <NavBar />
      <TopNewsList />
    </div>
  )
}
