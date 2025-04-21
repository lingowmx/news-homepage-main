import { newsList } from '../newsList'
import { LayoutNews } from './LayoutNews'

export const NewsList = () => {
  return (
    <section className='w-80 mt-3 flex flex-col gap-4'>
      {newsList.map((item, index) => {
        return <LayoutNews key={index} news={item} />
      })
      }
    </section>
  )
}
