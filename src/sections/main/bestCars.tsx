'use client';

import MoreProductButton from '@/components/moreProductButton';
import SliderNavigationButton from '@/components/sliderNavigationButton';


import { useRef } from 'react';
import { CiSquareMore } from 'react-icons/ci';
import type { Swiper as SwiperType } from 'swiper';
import BestCarsSlider from './bestCar/bestCarsSlider';
import { Card, Container, Typography } from '@mui/material';
import BestCarsSliderFallback from './bestCar/bestCarsSliderFallback';
import useIsMounted from '@/hooks/useIsMounted';
import { TOP_MARGIN } from '@/utils/layout';
import { HomeType } from '@/_types/_home';
import { PRODUCTS } from '@/path';

export default function BestCars({bestCarData}:{bestCarData:HomeType.CategorySection}) {
  const isMounted = useIsMounted();
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNextSlide = () => {
    const swiper = swiperRef.current;

    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.slideNext();
  };

  const handlePrevSlide = () => {
    const swiper = swiperRef.current;

    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.slidePrev();
  };

  return (
    <div className={`relative overflow-hidden ${TOP_MARGIN}` }>
      <Container maxWidth="xxl" className="relative z-10">
        <section className="!m-0 my-[1.875rem] !mb-0 sm:my-[2.5rem] lg:my-[3.75rem]">
          <Card className="bg-transparent bg-widget">
            {/* top section of */}
            <div className="mb-[45px] flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <div className="size-[50px] xl:size-[60px] [&>svg]:size-full [&>svg]:rounded-[10px] [&>svg]:bg-common-white [&>svg]:p-1 md:[&>svg]:p-2.5 xl:[&>svg]:p-4">
                  <CiSquareMore className="!bg-background-default" />
                </div>

                <div className="text-center md:text-start">
                  <Typography variant="h5" className="text-[1.3rem]">
                    <span className="text-error-main">
                      {bestCarData.title.split(" ")[0]}
                    </span>{' '}
                    {bestCarData.title.split(" ").slice(1).join(" ")}
                  </Typography>

                  <Typography variant="body2" className="pt-2 md:pt-1">
                    {bestCarData.subTitle}
                  </Typography>
                </div>
              </div>

              <div className="lg:hidden">
                <div className="flex items-center gap-6 sm:w-fit sm:flex-row md:gap-2">
                  <MoreProductButton link={PRODUCTS} />
                  <SliderNavigationButton
                    handleNextSlide={handleNextSlide}
                    handlePrevSlide={handlePrevSlide}
                  />
                </div>
              </div>
            </div>

            {isMounted ? (
              <BestCarsSlider
                cars={bestCarData.categories}
                selectedItem={0}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              />
            ) : (
              <BestCarsSliderFallback
                cars={bestCarData.categories}
                selectedItem={0}
              />
            )}
          </Card>
        </section>
      </Container>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute -bottom-0"
        >
          <path
            className="!fill-common-white"
            d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
function useOnMount() {
  throw new Error('Function not implemented.');
}
