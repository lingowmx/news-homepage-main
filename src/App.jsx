
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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-Off-white'>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20"
          onClick={toggleMenu}></div>
      )}
      <ToggleMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}
      />
      <MobileNavbar
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
        className="w-full flex justify-between fixed top-0 left-0 items-center p-4 z-40"/>
      <main className={`w-full max-w-[375px] flex flex-col items-center relative 
        md:max-w-[800px] md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3`}>
        <MainImage className="md:col-span-2" />
        <Title />
        <ReadMore />
        <News />
        <NewsList />
      </main>
    </div>
  )
}

export default App
