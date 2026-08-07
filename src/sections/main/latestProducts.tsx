'use client';

import MoreProductButton from '@/components/moreProductButton';
import SliderNavigationButton from '@/components/sliderNavigationButton';
import NewestProductsSlider from '@/sections/main/latestProducts/productSlider';
import { Container, Typography } from '@mui/material';
import { useRef } from 'react';
import { CiSquareMore } from 'react-icons/ci';
import type { Swiper as SwiperType } from 'swiper';
import { HomeType } from '@/_types/_home';
import LatestProductInfoCard from './latestProducts/productInfoCard';
import { TOP_MARGIN } from '@/utils/layout';
import { PRODUCTS } from '@/path';

type LatestProductsSectionProps = {
  data: HomeType.LatestProducts;
};

export default function ProductCollectionSection({ data }: LatestProductsSectionProps) {
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
    <Container maxWidth="xxl" className={TOP_MARGIN}>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="mb-[45px] flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="size-[50px] xl:size-[60px] [&>svg]:size-full [&>svg]:rounded-[10px] [&>svg]:bg-common-white [&>svg]:p-1 md:[&>svg]:p-2.5 xl:[&>svg]:p-4">
              <CiSquareMore className="!bg-background-paper" />
            </div>

            <div className="text-center md:text-start">
              <Typography variant="h5" className="text-nowrap text-[1.3rem]">
                <span className="text-error-main">{data.title.split(' ')[0]}</span>{' '}
                {data.title.split(' ')[1]}
              </Typography>

              <Typography variant="body2" className="text-nowrap pt-2 md:pt-1">
                {data.subTitle}
              </Typography>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-6 self-end sm:justify-end sm:self-auto md:gap-2">
            <MoreProductButton link={`${PRODUCTS}?sort=latest`} />
            <SliderNavigationButton
              handleNextSlide={handleNextSlide}
              handlePrevSlide={handlePreviousSlide}
            />
          </div>
        </div>
      </div>

      <div className="flex items-stretch gap-[1.875rem]">
        <LatestProductInfoCard title={data.title} description={data.description} image={data.image} />

        <div className="min-w-0 flex-1 lg:w-3/4 xl:w-4/5">
          <NewestProductsSlider
            products={data.products}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          />
        </div>
      </div>
    </Container>
  );
}
