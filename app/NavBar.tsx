const NavBar = () => {
  return (
    <nav className='bg-orange-400 mt-3 ml-3 mr-3 w-full'>
      <div className='mt-3 ml-3 mr-3  background'>
        <div className='flex gap-2'>
          <a href='/'>
            <p className='font-bold'>Hacker News </p>
          </a>
          <a href='/newStories'>new</a>
          <p>|</p>
          <a href='/pastStories'>past</a>
          <p>|</p>
          <a href='/comments'>comment</a>
          <p>|</p>
          <a href='/ask'>ask</a>
          <p>|</p>
          <a href='/show'>show</a>
          <p>|</p>
          <a href='/jobs'>job</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
