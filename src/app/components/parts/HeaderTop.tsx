'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { use, useEffect, useState } from "react";

const HeaderTop = ({dict}: {dict: any}) => {
  const topIcons  = ['checkmark', 'truck', 'heart', 'refund'];
  const [useSwiper, setUseSwiper] = useState(false);

  useEffect(() => {
    const resize = () => setUseSwiper(document.body.clientWidth < 992);
    window.addEventListener('resize', resize);
    resize();

    return () => window.removeEventListener('resize', resize);
  }, [])

  return (
    <div className="h-[50px] flex items-center bg-gunmetal">
      <div className="container w-full mx-auto lg:flex lg:justify-between">
        {useSwiper ? (
          <>
            <button className="prevSlide lg:hidden"></button>
            <Swiper
              className="w-full"
              slidesPerView={1}
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                enabled: true,
                nextEl: '.nextSlide',
                prevEl: '.prevSlide'
              }}
              loop
              breakpoints={{
                640: {
                  slidesPerView: 2,
                }
              }}
            >
              {dict["header"]["top-texts"].map((text: string, i: number) => (
                <SwiperSlide key={`htswp-${i}`}>
                  <span className="flex items-center max-lg:justify-center gap-2 text-xs text-white uppercase font-medium">
                    <Image src={`/icons/header/${topIcons[i]}.svg`} width={22} height={22} alt="" /> {text}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="nextSlide lg:hidden"></button>
          </>
        ) : (
          dict["header"]["top-texts"].map((text: string, i: number) => (
            <span key={`ht-${i}`} className="flex items-center max-lg:justify-center gap-2 text-xs text-white uppercase font-medium">
              <Image src={`/icons/header/${topIcons[i]}.svg`} width={22} height={22} alt="" /> {text}
            </span>
          ))
        )}
      </div>
    </div>  
  );
};

export default HeaderTop;