'use client';
import React, { useRef } from 'react';
import { Card, Container, Typography } from '@mui/material';
import { clsx } from 'clsx';
import { TOP_MARGIN } from '@/utils/layout';
import { type Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SliderNavButtons from './discountSection/sliderNavigationButtons';
import DiscountCard from './discountSection/discountCard';
import { HomeType } from '@/_types/_home';
import useIsMounted from '@/hooks/useIsMounted';

type BestOfferProps = {
  type?: 'primary' | 'secondary';
  discountData: HomeType.BestOfferSections;
};
export default function BestOffer({ type = 'primary', discountData }: BestOfferProps) {
  const isMounted = useIsMounted()
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
    <Container maxWidth="xxl" className={clsx(TOP_MARGIN, 'lg:flex')}>
      {/* info card */}
      <div
        className={clsx(
          'relative rounded-3xl border-0 border-b border-dashed border-grey-500 !p-0 lg:w-2/5 lg:border-b-0 lg:border-l',

          // Mobile: bottom right
          'before:absolute before:bottom-0 before:right-0',
          'before:size-10 before:translate-x-1/2 before:translate-y-1/2',
          'before:rounded-full before:bg-background-default before:content-[""]',

          // Desktop: top left
          'lg:before:bottom-auto lg:before:top-0',
          'lg:before:left-0 lg:before:right-auto',
          'lg:before:size-12',
          'lg:before:-translate-x-1/2 lg:before:-translate-y-1/2',

          // Mobile and desktop: bottom left
          'after:absolute after:bottom-0 after:left-0',
          'after:size-10 after:-translate-x-1/2 after:translate-y-1/2',
          'after:rounded-full after:bg-background-default after:content-[""]',
          'lg:after:size-12',

          type === 'primary' ? 'bg-primary-main' : 'bg-background-paper',
        )}
      >
        {/* heading */}
        <div className="flex w-full items-center gap-5 p-[20px] md:p-[40px]">
          {/* icon */}
          <img
            className={clsx(
              type === 'primary' ? 'rounded-full' : 'rounded-none',
              'size-12',
            )}
            src={discountData.img}
            alt="icon of discount area"
          />

          {/* title and desc */}
          <div>
            <Typography
              variant="h6"
              className={clsx(type === 'primary' && 'text-common-white')}
            >
              {discountData.title}
            </Typography>
            <Typography
              variant="body1"
              className={clsx(type === 'primary' && 'text-common-white')}
            >
              {discountData.subTitle}
            </Typography>
          </div>
        </div>

        {/* Slider Navigation BTN | discount percentage */}
        <div className="mt-0 flex items-center justify-between pb-[20px] md:pb-[40px]">
          {/* discount value */}
          <div
            className={clsx(
              'relative before:absolute before:h-full before:w-1 before:rounded-l-2xl before:shadow-s1 before:content-[""]',
              type === 'primary' ? 'before:bg-warning-main' : 'before:bg-error-main',
            )}
          >
            <Typography
              className={clsx(
                'relative py-2 pr-[20px] pt-2.5 font-bold md:pr-[40px]',
                type === 'primary' ? 'text-common-white' : 'text-error-main',
              )}
              variant={type === 'primary' ? 'h6' : 'body1'}
            >
              {discountData.discount}
            </Typography>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="pl-[20px] md:pl-[40px]">
            <div>
              <SliderNavButtons
                type={type}
                handleNextSlide={handlePreviousSlide}
                handlePrevSlide={handleNextSlide}
              />
            </div>
          </div>
        </div>
      </div>

      {/* slider */}
      <Card
        className={clsx(
          'min-w-0 overflow-hidden lg:w-3/5',
          type === 'primary' ? 'bg-primary-main' : 'bg-background-paper',
        )}
      >
        <div className="grid h-full items-center min-w-0 ">
          {isMounted ? (
            <Swiper
              className="!m-0 !w-full min-w-0"
              modules={[Navigation]}
              loop={true}
              slidesPerView={2}
              spaceBetween={20}
              speed={500}
              watchOverflow
              observer
              observeParents
              updateOnWindowResize
              breakpoints={{
                576: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;

                requestAnimationFrame(() => {
                  swiper.update();
                });
              }}
            >
              {discountData.products.map((product) => (
                <SwiperSlide key={product.id} className="!h-auto overflow-hidden">
                  <DiscountCard type={type} product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div dir="rtl" className="relative w-full overflow-hidden">
                  <div className="flex w-full flex-nowrap gap-[10px] min-[576px]:gap-4 min-[990px]:gap-5 min-[1200px]:gap-6">
                    {discountData.products.map((product) => (
                      <div
                        key={`${product.id}`}
                        className="min-w-0 flex-none basis-[calc((100%-10px)/2)] min-[576px]:basis-[calc((100%-32px)/3)] min-[990px]:basis-[calc((100%-60px)/4)] min-[1200px]:basis-[calc((100%-60px)/5)] [&>*]:h-full"
                      >
                        <DiscountCard type={type} product={product} />
                      </div>
                    ))}
                  </div>
                </div>
          )}
        </div>
      </Card>
    </Container>
  );
}
