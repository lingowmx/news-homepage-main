

export const News = () => {
  return (
    <section className="w-80 flex flex-col justify-center bg-Very-dark-blue p-4 md:col-start-3 md:row-start-1 md:row-end-3 md:h-full">
      <h2 className="text-Soft-orange mb-1 text-2xl font-bold">New</h2>
      <div>
        <h3 className="text-Off-white font-semibold text-lg mt-2">Hydrogen VS electric cars</h3>
        <p className="text-Grayish-blue text-sm mt-1 mb-3">Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <hr className="text-Grayish-blue"/>
      <div>
        <h3 className="text-Off-white font-semibold text-lg mt-2">The downside of AI artistry</h3>
        <p className="text-Grayish-blue text-sm mt-1 mb-3">What are the possible adverts effects of on demand AI generation</p>
      </div>
      <hr className="text-Grayish-blue"/>
      <div>
        <h3 className="text-Off-white font-semibold text-lg mt-2">Is VC fund drying up?</h3>
        <p className="text-Grayish-blue text-sm mt-1 mb-3">Private funding by VC firms is down 50% YOY. We take a look of hat that means</p>
      </div>
    </section>
  )
}