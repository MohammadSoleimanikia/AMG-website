'use client';

import SwiperSkeleton from '@/components/swiperSkeleton';
import useIsMounted from '@/hooks/useIsMounted';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './productCard';
import { ProductTypes } from '@/_types/_product';

type ProductCarouselProps = {
  products: ProductTypes.Product[];
  onSwiper: (swiper: SwiperType) => void;
};

export default function NewestProductsSlider({
  products,
  onSwiper,
}: ProductCarouselProps) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <SwiperSkeleton
        count={4}
        className="h-full auto-cols-[calc((100%-12px)/2)] md:auto-cols-[calc((100%-40px)/3)] lg:auto-cols-[calc((100%-60px)/4)]"
        
      />
    );
  }

  if (!products.length) {
    return null;
  }

  return (
    <Swiper
      dir="rtl"
      className="h-full w-full"
      slidesPerView={2}
      spaceBetween={10}
      speed={450}
      loop={products.length > 4}
      grabCursor
      watchOverflow
      observer
      observeParents
      onSwiper={onSwiper}
      breakpoints={{
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="!h-full">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
