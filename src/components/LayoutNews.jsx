

export const LayoutNews = ({news}) => {
  return (
    <section className="flex gap-5">
      <div className="w-20 h-24 object-cover">
        <img src={news.image} alt={news.title} />
      </div>
      <div className="w-2/3">
        <span className="text-Soft-red text-lg font-bold">{news.number}</span>
        <h3 className="font-semibold">{news.title}</h3>
        <p className="text-Dark-grayish-blue">{news.description}</p>
      </div>
    </section>
  )
}
