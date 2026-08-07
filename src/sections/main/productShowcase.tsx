'use client';


import { Card, Container } from '@mui/material';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import ProductShowcaseInfoCard from './productShowcase/productShowcaseInfoCard';
import ProductShowcaseSlider from './productShowcase/productShowcaseSlider';
import clsx from 'clsx';
import { TOP_MARGIN } from '@/utils/layout';
import { HomeType } from '@/_types/_home';

export default function ProductShowcase({productList}:{productList:HomeType.ProductListSection}) {
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
    <div className="relative overflow-hidden bg-common-white">
      <Container maxWidth="xxl">
        <section className={`${TOP_MARGIN}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <ProductShowcaseInfoCard
              
                title={productList.title}
                subTitle={productList.subTitle}
                description={productList.description}
                onNext={handleNextSlide}
                onPrevious={handlePreviousSlide}
              />
            </div>

            <div
              className={clsx(
                'relative lg:col-span-9',

                // right circle
                'before:pointer-events-none before:absolute before:right-0 before:top-0 before:z-20 before:size-12',
                'before:-translate-y-1/2 before:translate-x-1/2 before:rounded-full before:bg-common-white',
                "before:content-['']",

                // on mobile left circle
                'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-20 after:size-12',
                'after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-common-white',
                "after:content-['']",

                // on desktop
                'lg:after:bottom-0 lg:after:left-auto lg:after:right-0 lg:after:top-auto',
                'lg:after:translate-x-1/2 lg:after:translate-y-1/2',
              )}
            >
              <Card className="h-full w-full !overflow-hidden bg-background-default">
                <ProductShowcaseSlider
                  products={productList.products}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                />
              </Card>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
