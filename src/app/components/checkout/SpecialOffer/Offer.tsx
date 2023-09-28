import Image from "next/image";

const Offer = ({dictionary}: {dictionary: any}) => {
  const dict = dictionary["checkout"];
  return (
    <div className="offer w-full p-10 rounded-[10px] bg-neutral-50">
      <div className="details grid lg:grid-cols-2 gap-10">
        <div className="image relative w-full md:h-[591px]">
          <Image src="/images/offer.png" fill alt="Satisfaction 30 days guarantee" />
        </div>
        <div className="content">
          <span className="mb-6 text-[32px] text-black" dangerouslySetInnerHTML={{__html: dict["thirdStep"]["offer"]["title"]}}></span>
        </div>
      </div>
    </div>
  )
};

export default Offer;