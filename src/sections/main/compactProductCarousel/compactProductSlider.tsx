'use client';

import useIsMounted from '@/hooks/useIsMounted';
import type { HomeProduct } from '@/mockData/homeProductData';
import { Skeleton } from '@mui/material';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CompactProductItem from './compactProductItem';

type CompactProductSliderProps = {
  products: HomeProduct[];
  variant: 'light' | 'primary';
  onSwiper: (swiper: SwiperType) => void;
};

export default function CompactProductSlider({
  products,
  variant,
  onSwiper,
}: CompactProductSliderProps) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="grid grid-flow-col auto-cols-[calc((100%-32px)/3)] gap-4 overflow-hidden sm:auto-cols-[calc((100%-48px)/4)] lg:auto-cols-[calc((100%-80px)/5)] lg:gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <Skeleton variant="circular" className="size-[3.75rem] sm:size-[4.5rem]" />
            <Skeleton variant="text" className="mt-2 h-5 w-full" />
            <Skeleton variant="text" className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Swiper
      dir="rtl"
      className="w-full"
      slidesPerView={3}
      spaceBetween={12}
      speed={400}
      loop={products.length > 5}
      grabCursor
      watchOverflow
      observer
      observeParents
      onSwiper={onSwiper}
      breakpoints={{
        576: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="!h-auto">
          <CompactProductItem product={product} variant={variant} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
