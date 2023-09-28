
const Offer = ({dictionary}: {dictionary: any}) => {
  return (
    <div className="offer w-full p-10 rounded-[10px] bg-neutral-50">
      <div className="details grid lg:grid-cols-2">
        <div className="image">
          <img src="/images/offer.png" alt="offer" />
        </div>
        <div className="content">
          <h1 className="mb-6">{dictionary["thirdStep"]["offer"]["heading"]["title"]}</h1>
          <span className="text-2xl">{dictionary["thirdStep"]["offer"]["heading"]["subtitle"]}</span>
          <p className="mt-6">{dictionary["thirdStep"]["offer"]["content"]}</p>
          <div className="btn mt-6">
            <button className="btn-primary">{dictionary["thirdStep"]["offer"]["button"]}</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Offer;