'use client';

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
      // skeleton
      <div dir="rtl" className="relative h-full w-full overflow-hidden">
        <div className="flex h-full w-full flex-nowrap gap-[12px] sm:gap-5 md:gap-5 xl:gap-[30px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-0 flex-none basis-[calc((100%_-_12px)_/_2)] sm:basis-[calc((100%_-_20px)_/_2)] md:basis-[calc((100%_-_40px)_/_3)] xl:basis-[calc((100%_-_90px)_/_4)] !h-full"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
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
      speed={200}
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
