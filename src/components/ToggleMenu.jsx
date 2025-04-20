

export const ToggleMenu = ({ isMenuOpen }) => {
  return (
    <>
      {isMenuOpen && (
        <ul className="w-72">
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
