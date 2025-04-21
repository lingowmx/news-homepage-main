

export const ToggleMenu = ({ isMenuOpen }) => {
  return (
    <>
      {isMenuOpen && (
        <ul className="w-72 border border-black">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>

      )}
    </>
  )
}
