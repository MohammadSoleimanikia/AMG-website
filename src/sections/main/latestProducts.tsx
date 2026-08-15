'use client';

import NewestProductsSlider from '@/sections/main/latestProducts/productSlider';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { HomeType } from '@/_types/_home';
import LatestProductInfoCard from './latestProducts/productInfoCard';
import { TOP_MARGIN } from '@/utils/layout';
import { PRODUCTS } from '@/path';
import TopSliderSection from '@/components/topSliderSection';

type LatestProductsSectionProps = {
  data: HomeType.LatestProducts;
};

export default function ProductCollectionSection({
  data,
}: LatestProductsSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNextSlide = () => {
    const swiper = swiperRef.current;

    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.slideNext();
  };

  const handlePreviousSlide = () => {
    const swiper = swiperRef.current;

    if (!swiper || swiper.destroyed) {
      return;
    }

    swiper.slidePrev();
  };

  return (
    <div >
      <TopSliderSection
        title={data.title}
        subTitle={data.subTitle}
        link={`${PRODUCTS}?sort=latest`}
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePreviousSlide}
      />

      <div className="flex items-stretch gap-[1.875rem]">
        <LatestProductInfoCard
          title={data.title}
          description={data.description}
          image={data.image}
        />

        <div className="min-w-0 flex-1 lg:w-3/4 xl:w-4/5">
          <NewestProductsSlider
            products={data.products}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          />
        </div>
      </div>
    </div>
  );
}