import Image from "next/image";
import './styles/Footer.scss';

const Footer = async ({dictionary}:{dictionary: any}) => {
  return (
    <footer className="absolute bottom-0 left-0 w-full py-10 text-white bg-gunmetal">
      <div className="container flex max-lg:flex-col gap-4 lg:justify-between text-xs md:text-base">
        <div className="copyright max-lg:w-full flex items-center gap-4 max-lg:justify-center">
          {dictionary["footer"]["copyright"]} <span className="block w-[1px] h-[14px] md:h-6 bg-white"></span> <a target="_blank" href={`mailto:${dictionary["footer"]["email"]}`}>{dictionary["footer"]["email"]}</a>
        </div>

        <div className="encryption max-lg:w-full flex items-center gap-4 max-lg:justify-center">
          <i className="relative block w-3 h-3 md:w-4 md:h-4"><Image src="/icons/footer/lock.svg" aria-hidden fill alt="" /></i> {dictionary["footer"]["encryption"]}
        </div>
      </div>
    </footer>
  )
};

export default Footer;