import closeIcon from '../../assets/images/icon-menu-close.svg'

export const ToggleMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {isMenuOpen && (
        <div className='w-72 h-screen bg-Off-white flex absolute z-30 top-0 right-0'>
          <button
            className='self-end m-3 absolute z-40 top-0 right-0'
            aria-label='Close-menu'
            onClick={toggleMenu}>
            <img
              src={closeIcon}
              className='w-8 h-8'
              onClick={toggleMenu} />
          </button>
          <div className='mt-32 text-lg font-semibold text-Dark-grayish-blue'>
            <ul className="h-64 w-full bg-Off-white flex justify-between flex-col pl-5">
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>
        </div>


      )}
    </>
  )
}
