import Image from "next/image";
import './styles/Footer.scss';
import Divider from "./Divider";

const Footer = async ({dictionary}:{dictionary: any}) => {
  return (
    <footer className="absolute bottom-0 left-0 w-full py-5 md:py-10 text-white bg-gunmetal">
      <div className="container flex max-md:flex-col gap-4 md:justify-between text-xs md:text-base">
        <div className="copyright max-md:w-full grid grid-cols-[auto_auto_auto] items-center gap-4 max-md:justify-center">
          {dictionary["footer"]["copyright"]}
          {/* <span className="block w-[1px] h-[14px] md:h-6 bg-white"></span> */}
          <Divider className="bg-white" />
          <a target="_blank" href={`mailto:${dictionary["footer"]["email"]}`}>{dictionary["footer"]["email"]}</a>
        </div>

        <div className="encryption max-md:w-full flex items-center gap-4 max-md:justify-center">
          <i className="relative block w-3 h-3 md:w-4 md:h-4"><Image src="/icons/footer/lock.svg" aria-hidden fill alt="" /></i> {dictionary["footer"]["encryption"]}
        </div>
      </div>
    </footer>
  )
};

export default Footer;