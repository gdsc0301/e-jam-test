import Offer from "../components/checkout/SpecialOffer/Offer";
import Steps from "../components/checkout/Steps";

const ThirdStep = ({dictionary}:{dictionary: any}) => {
    const dict = dictionary["checkout"];
    return(
        <div className="container pt-8">
            <div className="heading mb-[10px] text-center">
                <h1 className="mb-6">{dict["thirdStep"]["heading"]["title"]}</h1>
                <span className="text-2xl">{dict["thirdStep"]["heading"]["subtitle"]}</span>
            </div>
            <Steps currStep={3} dictionary={dictionary} />
            <Offer dictionary={dictionary} />
        </div>
    )
}

export default ThirdStep;