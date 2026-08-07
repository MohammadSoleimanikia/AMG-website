'use client';

import Image from '@/components/image';

import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ButtonBase, Skeleton } from '@mui/material';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import type { HomeType } from '@/_types/_home';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import useIsMounted from '@/hooks/useIsMounted';
import LinkComponent from '@/components/linkComponent';

export default function HeroSlider({ images }: { images: HomeType.BannerType[]}) {
  const isMounted = useIsMounted();
  const [active, setActive] = useState(0);

  const mainSwiperRef = useRef<SwiperType | null>(null);

  const mainSwiperRefMobile = useRef<SwiperType | null>(null);

  const handlePreviousSlide = () => {
    const swiper = mainSwiperRef.current;

    if (!swiper || swiper.destroyed) {
      return;
    }
    // its reverse cause of RTL 
    swiper.slidePrev();
  };

  const handleNextSlide = () => {
    const swiper = mainSwiperRef.current;

    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.slideNext();
  };

  // handle mobile
  const handlePreviousSlideMobile = () => {
    const swiper = mainSwiperRefMobile.current;

    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.slidePrev();
  };

  const handleNextSlideMobile = () => {
    const swiper = mainSwiperRefMobile.current;

    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.slideNext();
  };

  return (
    <>
      {/* ---------------------desktop---------------------------------- */}
      <div className=" relative hidden md:block sm:my-[2.5rem] lg:my-[3.75rem]">
        {/* Main Hero Swiper */}
        <Swiper
          className="relative h-[300px] overflow-hidden rounded-[20px]  md:h-[300px] lg:h-[450px]  lg:rounded-[40px]"
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          speed={500}
          loop={images.length > 1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={(swiper) => {
            setActive(swiper.activeIndex);
          }}

          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={`hero-${image}-${index}`}
              className="!h-full overflow-hidden"
            >
              <LinkComponent href={`products?sort=${image.link}`}  className="h-full w-full">
                <Image
                
                  visibleByDefault
                  src={image.image}
                  alt={`تصویر اسلاید ${image.id}`}
                  className="!size-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-center"
                />
              </LinkComponent>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail container */}
        <div className="absolute bottom-0 right-0 z-10 h-[70px] w-[215px] rounded-tl-3xl xl:h-[80px] xl:w-[248px]">
          <div className="relative h-full w-full rounded-tl-3xl bg-background-default">
            {/* top svg */}
            <div className="absolute -top-6 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26.65 29.02"
                className="w-[25px]"
              >
                <path
                  d="M0,28.98c0,0.01,0,0.02,0,0.03h26.65V0C26.65,15.57,14.83,28.27,0,28.98z"
                  className="fill-background-default"
                />
              </svg>
            </div>
            
            {/* bottom svg */}
            <div className="absolute -bottom-3 -left-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26.65 29.02"
                className="w-[25px]"
              >
                <path
                  d="M0,28.98c0,0.01,0,0.02,0,0.03h26.65V0C26.65,15.57,14.83,28.27,0,28.98z"
                  className="fill-background-default"
                />
              </svg>
            </div>

            {/* Thumbnail Pagination */}
            <div className="z-20 flex h-full w-full items-center justify-between gap-2 px-4">
              {isMounted ? images.map((item, index) => (
                <div
                  className={clsx(
                    'size-14 overflow-hidden rounded-full  transition-all duration-300',
                    active === index && ' border-4 border-solid border-custom-1 ',
                  )}
                  key={item.image}
                  onClick={() => {
                    mainSwiperRef.current?.slideTo(index);
                  }}
                >
                  <Image
                    className="!size-full [&_img]:object-cover"
                    src={item.image}
                  />
                </div>
              )) : <div className='w-full flex justify-between'>
                      <Skeleton className='size-14' variant='circular'/>
                      <Skeleton className='size-14' variant='circular'/>
                      <Skeleton className='size-14' variant='circular'/>
                </div>}
              
            </div>
          </div>
        </div>
        {/* next and prev buttons */}
        <div
          dir="ltr"
          className="absolute bottom-10 left-10 z-20 flex items-center gap-2 md:bottom-6 md:left-6"
        >
          <ButtonBase
            type="button"
            disabled={images.length <= 1}
            onClick={handleNextSlide}
            className="flex size-9 items-center justify-center rounded-full bg-common-white text-text-primary transition-colors duration-200 hover:bg-common-black hover:text-common-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <TfiAngleLeft className="size-4" />
          </ButtonBase>

          <ButtonBase
            type="button"
            disabled={images.length <= 1}
            onClick={handlePreviousSlide}
            className="flex size-9 items-center justify-center rounded-full bg-common-white text-text-primary transition-colors duration-200 hover:bg-common-black hover:text-common-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <TfiAngleRight className="size-4" />
          </ButtonBase>
        </div>
      </div>

      {/* ----------------------MOBILE------------------------------------------ */}
      <div className="relative md:hidden">
        {/* Main Hero Swiper */}
        <Swiper
          className="relative rounded-[20px] lg:rounded-[40px] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[300px] xl:h-[350px] xxl:h-[430px]"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          speed={500}
          loop={images.length > 1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          onSwiper={(swiper) => {
            mainSwiperRefMobile.current = swiper;
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={`hero-${image}-${index}`}
              className="w-full overflow-hidden"
            >
              <div className=" h-full">
                <Image
                  visibleByDefault
                  src={image.image}
                  alt={`تصویر اسلاید ${index + 1}`}
                  className="[&_img]:object-cover block h-full "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* next and prev buttons */}
        <div
          dir="ltr"
          className="absolute bottom-5 left-5 z-20 flex items-center gap-2 md:bottom-6 md:left-6"
        >
          <ButtonBase
            type="button"
            disabled={images.length <= 1}
            onClick={handleNextSlideMobile}
            className="flex size-7 items-center justify-center rounded-full bg-common-white text-text-primary transition-colors duration-200 hover:bg-common-black hover:text-common-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <TfiAngleLeft className="size-4" />
          </ButtonBase>

          <ButtonBase
            type="button"
            disabled={images.length <= 1}
            onClick={handlePreviousSlideMobile}
            className="flex size-7 items-center justify-center rounded-full bg-common-white text-text-primary transition-colors duration-200 hover:bg-common-black hover:text-common-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <TfiAngleRight className="size-4" />
          </ButtonBase>
        </div>
      </div>
    </>
  );
}
