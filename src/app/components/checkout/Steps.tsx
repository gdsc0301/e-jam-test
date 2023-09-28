import Image from "next/image";

const Steps = ({currStep, dictionary}:{currStep: number, dictionary: any}) => {
  const dict = dictionary["checkout"];
  return (
    <nav className="my-[40px] flex items-center justify-between">
      {dict["steps"].map((step: any, i: number) => {
        const isCurr = i+1 === currStep;
        const isNext = i+1 > currStep;

        return (
          <a key={`checkoutStep${i}`} href={`#step${i}`} className="step flex max-md:flex-col items-center gap-[20px] text-black text-xl">
            <span className={`relative flex items-center justify-center w-10 h-10 rounded-full text-xl ${isNext ? 'text-crayola' : 'text-white'} ${isNext ? 'border border-crayola' : ''} ${isCurr ? 'bg-crayola' : (isNext ? 'bg-white' : 'bg-apple')}`}>
              {isCurr || isNext ? i + 1 : <Image src="/icons/checkout/tick-white.svg" alt="" width={23} height={18} aria-hidden="true"  />}
            </span>
            {`${dict["step"]} ${i + 1}: ${step}`}
          </a>
        );
      })}
    </nav>
  );
};

export default Steps;