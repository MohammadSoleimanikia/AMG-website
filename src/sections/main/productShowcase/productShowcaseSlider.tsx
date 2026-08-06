'use client';

import useIsMounted from '@/hooks/useIsMounted';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductShowcaseCard from './productShowcaseCard';
import ProductShowCaseSliderFallback from './productShowCaseSliderFallBack';
import { ProductTypes } from '@/_types/_product';

type ProductShowcaseSliderProps = {
  products: ProductTypes.Product[];
  onSwiper: (swiper: SwiperType) => void;
};

export default function ProductShowcaseSlider({
  products,
  onSwiper,
}: ProductShowcaseSliderProps) {
  const isMounted = useIsMounted();

  // skeleton
  if (!isMounted) {
    return (
      <ProductShowCaseSliderFallback products={products}/>
    );
  }

  if (!products.length) {
    return null;
  }

  return (
    <Swiper
      dir="rtl"
      className="h-full lg:p-5"
      slidesPerView={2}
      spaceBetween={15}
      speed={450}
      loop={products.length > 4}
      grabCursor
      observer
      observeParents
      onSwiper={onSwiper}
      breakpoints={{
        576: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1200:{
          slidesPerView:4,
        }
       
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="!h-auto">
          <ProductShowcaseCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
