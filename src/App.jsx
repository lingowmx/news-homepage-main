
import { useState } from 'react'
import './App.css'
import { MobileNavbar } from './components/MobileNavbar'
import { ToggleMenu } from './components/ToggleMenu'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className='w-[375px]'>
      <MobileNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ToggleMenu isMenuOpen={isMenuOpen}/>
    </main>
  )
}

export default App
