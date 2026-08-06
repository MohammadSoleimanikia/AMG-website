'use client';

import Image from '@/components/image';
import LinkComponent from '@/components/linkComponent';
import type { CompactProductCarouselData } from '@/mockData/homeProductData';
import { TOP_MARGIN } from '@/utils/layout';
import { ButtonBase, Card, Typography } from '@mui/material';
import clsx from 'clsx';
import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import type { Swiper as SwiperType } from 'swiper';
import CompactProductSlider from './compactProductSlider';

type CompactProductCarouselProps = {
  data: CompactProductCarouselData;
  variant?: 'light' | 'primary';
};

export default function CompactProductCarousel({
  data,
  variant = 'light',
}: CompactProductCarouselProps) {
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

  const isPrimary = variant === 'primary';

  return (
    <section className={TOP_MARGIN}>
      <Card
        className={clsx(
          'relative grid overflow-visible !rounded-3xl !p-0 lg:grid-cols-12',
          isPrimary
            ? 'bg-primary-main text-common-white shadow-s9'
            : 'bg-background-paper text-text-primary shadow-s3',
        )}
      >
        <div
          className={clsx(
            'relative z-10 flex flex-col justify-between gap-5 border-b border-dashed px-5 py-6 lg:col-span-4 lg:border-b-0 lg:border-l lg:px-8 lg:py-7 xxl:col-span-3',
            isPrimary ? 'border-custom-1' : 'border-grey-300',
          )}
        >
          <LinkComponent href={data.href} className="flex items-center gap-4">
            <Image
              src={data.image}
              alt={data.title}
              className="size-12 rounded-full bg-background-paper p-1 lg:size-16 [&_img]:rounded-full [&_img]:object-contain"
            />

            <div className="min-w-0">
              <Typography variant="h5" className="truncate">
                {data.title}
              </Typography>
              <Typography
                variant="body2"
                className={clsx(
                  'mt-1',
                  isPrimary ? 'text-primary-light' : 'text-text-secondary',
                )}
              >
                {data.subtitle}
              </Typography>
            </div>
          </LinkComponent>

          <div className="relative flex items-center justify-between gap-3 before:absolute before:right-[-20px] before:h-full before:w-1 before:rounded-l-xl before:bg-warning-main before:shadow-s15 lg:before:right-[-32px]">
            <Typography variant="subtitle2" className="pt-1">
              {data.promotionText}
            </Typography>

            <div className="flex items-center gap-2">
              <ButtonBase
                type="button"
                onClick={handleNextSlide}
                aria-label="محصول بعدی"
                className={clsx(
                  '!flex !size-9 !items-center !justify-center !rounded-full transition-colors duration-200',
                  isPrimary
                    ? 'bg-background-paper text-primary-main hover:bg-warning-main hover:text-common-white'
                    : 'bg-background-default text-text-primary hover:bg-primary-main hover:text-common-white',
                )}
              >
                <IoIosArrowForward className="size-5" />
              </ButtonBase>

              <ButtonBase
                type="button"
                onClick={handlePreviousSlide}
                aria-label="محصول قبلی"
                className={clsx(
                  '!flex !size-9 !items-center !justify-center !rounded-full transition-colors duration-200',
                  isPrimary
                    ? 'bg-background-paper text-primary-main hover:bg-warning-main hover:text-common-white'
                    : 'bg-background-default text-text-primary hover:bg-primary-main hover:text-common-white',
                )}
              >
                <IoIosArrowBack className="size-5" />
              </ButtonBase>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            'relative min-w-0 px-5 py-6 lg:col-span-8 lg:px-8 lg:py-7 xxl:col-span-9',
            "before:pointer-events-none before:absolute before:right-0 before:top-0 before:size-8 before:-translate-y-1/2 before:translate-x-1/2 before:rounded-full before:bg-common-white before:content-['']",
            "after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:size-8 after:translate-x-1/2 after:translate-y-1/2 after:rounded-full after:bg-common-white after:content-['']",
          )}
        >
          <CompactProductSlider
            products={data.products}
            variant={variant}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          />
        </div>
      </Card>
    </section>
  );
}
