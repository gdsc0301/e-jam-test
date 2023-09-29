import Offer from "../components/checkout/SpecialOffer/Offer";
import Steps from "../components/checkout/Steps";

const ThirdStep = ({ dictionary }: { dictionary: any }) => {
  const dict = dictionary["checkout"];
  return (
    <div className="container pt-8 pb-[61px]">
      <div className="heading mb-[20px] text-center">
        <h1 className="mb-5 text-black text-center text-[32px] lg:text-5xl leading-snug capitalize">{dict["thirdStep"]["heading"]["title"]}</h1>
        <span className="text-base lg:text-2xl leading-snug capitalize">{dict["thirdStep"]["heading"]["subtitle"]}</span>
      </div>
      <Steps currStep={3} dictionary={dictionary} />
      <Offer dictionary={dictionary} />
    </div>
  )
}

export default ThirdStep;