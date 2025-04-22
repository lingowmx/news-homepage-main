import { newsList } from '../newsList'
import { LayoutNews } from './LayoutNews'

export const NewsList = () => {
  return (
    <section className='w-80 mt-12 mb-12 flex flex-col gap-4 md:w-full md:flex-row md:row-start-3 md:col-span-3 md:mt-4'>
      {newsList.map((item, index) => {
        return <LayoutNews key={index} news={item} />
      })
      }
    </section>
  )
}
