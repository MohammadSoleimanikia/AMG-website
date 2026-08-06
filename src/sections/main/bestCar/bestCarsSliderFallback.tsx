'use client';

import type { CarData } from '@/mockData/bestCarData';
import BestCarCard from './bestCarCard';
import { HomeType } from '@/_types/_home';

type BestCarsSliderFallbackProps = {
  cars: HomeType.Categories[];
  selectedItem?: number;
};

export default function BestCarsSliderFallback({
  cars,
  selectedItem = 0,
}: BestCarsSliderFallbackProps) {
  if (!cars.length) {
    return null;
  }


  const indexedCars = cars.map((car, index) => ({
    car,
    originalIndex: index,
  }));

  // Start the fallback from the same item used by Swiper's initialSlide
  const orderedCars = [
    ...indexedCars.slice(selectedItem),
    ...indexedCars.slice(0, selectedItem),
  ];

  return (
    <div dir="rtl" className="relative w-full overflow-hidden">
      <div className="flex w-full flex-nowrap gap-[10px] min-[576px]:gap-4 min-[990px]:gap-5 min-[1200px]:gap-6">
        {orderedCars.map(({ car, originalIndex }) => (
          <div
            key={`${car.title}-${originalIndex}`}
            className="min-w-0 flex-none basis-[calc((100%-10px)/2)] min-[576px]:basis-[calc((100%-32px)/3)] min-[990px]:basis-[calc((100%-60px)/4)] min-[1200px]:basis-[calc((100%-96px)/5)] [&>*]:h-full"
          >
            <BestCarCard car={car} selected={originalIndex === selectedItem} />
          </div>
        ))}
      </div>
    </div>
  );
}
