'use client';


import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import BestCarsSlider from './bestCar/bestCarsSlider';
import { Card, Container } from '@mui/material';
import BestCarsSliderFallback from './bestCar/bestCarsSliderFallback';
import useIsMounted from '@/hooks/useIsMounted';
import { HomeType } from '@/_types/_home';
import { PRODUCTS } from '@/path';
import BestCarSVG from './bestCar/bestCarSVG';
import TopSliderSection from '@/components/topSliderSection';

export default function BestCars({
  bestCarData,
}: {
  bestCarData: HomeType.CategorySection;
}) {
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
    <div className={`relative overflow-hidden`}>
      <Container maxWidth="xxl" className="relative z-10">
        <section className="!m-0 my-[1.875rem] !mb-0 sm:my-[2.5rem] lg:my-[3.75rem]">
          <Card className="bg-transparent bg-widget">
            {/* top section of */}
            <TopSliderSection
              title={bestCarData.title}
              subTitle={bestCarData.subTitle}
              link={PRODUCTS}
              handleNextSlide={handleNextSlide}
              handlePrevSlide={handlePrevSlide}
            />

            {isMounted ? (
              <BestCarsSlider
                cars={bestCarData.categories}
                selectedItem={0}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              />
            ) : (
              <BestCarsSliderFallback cars={bestCarData.categories} selectedItem={0} />
            )}
          </Card>
        </section>
      </Container>
      <div className="relative">
        <BestCarSVG />
      </div>
    </div>
  );
}
