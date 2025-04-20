import logo from '../../assets/images/logo.svg'
import iconMenu from '../../assets/images/icon-menu.svg'


export const MobileNavbar = ({setIsMenuOpen, isMenuOpen}) => {
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='w-full flex justify-between p-2'>
      <img src={logo} alt="logo" className='w-8 h-8 object-contain cursor-pointer' />
      <img 
        src={iconMenu}
        alt="iconMenu"
        className='w-8 h-8 object-contain cursor-pointer'
        onClick={toggleMenu}/>
    </nav>

  )
}
