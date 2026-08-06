'use client';

import type { CarData } from '@/mockData/bestCarData';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BestCarCard from './bestCarCard';
import { HomeType } from '@/_types/_home';

type BestCarsSliderProps = {
  cars: HomeType.Categories[];
  selectedItem?: number;
  onSwiper: (swiper: SwiperType) => void;
};

export default function BestCarsSlider({
  cars,
  selectedItem = 0,
  onSwiper,
}: BestCarsSliderProps) {
  if (!cars.length) {
    return null;
  }

  return (
    <Swiper
      dir="rtl"
      className="relative"
      slidesPerView={2}
      spaceBetween={10}
      speed={450}
      initialSlide={selectedItem}
      loop={cars.length > 5}
      watchOverflow
      onSwiper={onSwiper}
      breakpoints={{
        576: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        990: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      }}
    >
      {cars.map((car, index) => (
        <SwiperSlide key={`${car.title}-${index}`} className="!h-auto">
          <BestCarCard car={car} selected={index === selectedItem} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
