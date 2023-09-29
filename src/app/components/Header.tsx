import Image from "next/image";
import type { Dictionary } from "../helpers/Dict";
import HeaderTop from "./parts/HeaderTop";

const Header = async ({dictionary}:{dictionary: Dictionary}) => {

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10">
      <HeaderTop dict={dictionary} />
      <div className="py-5 lg:py-[30px] container flex justify-between items-center">
        <a className="logo relative w-[106px] lg:w-[192px] h-5 lg:h-9" href="/">
          <Image src="/logos/clarifon.png" alt="Clarifon" fill className="object-contain" />
        </a>

        <div className="flex gap-4 lg:gap-8">
          <div className="w-11 h-4 lg:w-[88px] lg:h-[32px]">
            <Image alt="mcafee" src="/logos/mcafee.svg" width={88} height={32} />
          </div>
          <div className="w-11 h-4 lg:w-[88px] lg:h-[32px]">
            <Image alt="norton" src="/logos/norton.svg" width={82} height={32} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;