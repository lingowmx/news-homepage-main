import mobileWebImage from '../../assets/images/image-web-3-mobile.jpg'
import desktopWebImage from '../../assets/images/image-web-3-desktop.jpg'


export const MainImage = () => {
  return (
    <div className='w-full md:col-span-2'>
      <picture>
        <source srcSet={mobileWebImage} media='(max-width: 639px)'/>
        <source srcSet={desktopWebImage} media='(min-width: 640px)' />
        <img src={mobileWebImage} alt="mobileImage" />
      </picture>
    </div>
  )
}
