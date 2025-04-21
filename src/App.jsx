
import { useState } from 'react'
import './App.css'
import { MobileNavbar } from './components/MobileNavbar'
import { ToggleMenu } from './components/ToggleMenu'
import { MainImage } from './components/MainImage'
import { Title } from './components/Title'
import { ReadMore } from './components/ReadMore'
import { News } from './components/News'
import { NewsList } from './components/NewsList'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className='w-[375px] flex flex-col items-center'>
      <MobileNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ToggleMenu isMenuOpen={isMenuOpen}/>
      <MainImage/>
      <Title/>
      <ReadMore/>
      <News/>
      <NewsList/>
    </main>
  )
}

export default App
