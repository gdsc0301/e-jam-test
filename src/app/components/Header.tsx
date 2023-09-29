import Image from "next/image";
import type { Dictionary } from "../helpers/Dict";
import HeaderTop from "./parts/HeaderTop";

const Header = async ({dictionary}:{dictionary: Dictionary}) => {

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10">
      <HeaderTop dict={dictionary} />
      <div className="py-[30px] container flex justify-between items-center">
        <Image src="/logos/clarifon.png" alt="Clarifon" width={192} height={36} />

        <div className="flex gap-8">
          <Image alt="mcafee" src="/logos/mcafee.svg" width={88} height={32} />
          <Image alt="norton" src="/logos/norton.svg" width={82} height={32} />
        </div>
      </div>
    </header>
  );
}

export default Header;