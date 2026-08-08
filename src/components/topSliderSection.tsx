import React, { MouseEventHandler } from 'react'
import MoreProductButton from './moreProductButton'
import SliderNavigationButton from './sliderNavigationButton'
import { Typography } from '@mui/material'
import { CiSquareMore } from 'react-icons/ci'
type TopSliderSectionProps={
  title:string;
  subTitle:string;
  link:string;
  handleNextSlide:MouseEventHandler<HTMLButtonElement>
  handlePrevSlide:MouseEventHandler<HTMLButtonElement>
}
export default function TopSliderSection({title,subTitle,link,handleNextSlide,handlePrevSlide}:TopSliderSectionProps) {
  return (
    <div className="mb-[45px] flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <div className="size-[50px] xl:size-[60px] [&>svg]:size-full [&>svg]:rounded-[10px] [&>svg]:bg-common-white [&>svg]:p-1 md:[&>svg]:p-2.5 xl:[&>svg]:p-4">
                  <CiSquareMore className="!bg-background-default" />
                </div>

                <div className="text-center md:text-start">
                  <Typography variant="h5" className="text-[1.3rem]">
                    <span className="text-error-main">
                      {title.split(" ")[0]}
                    </span>{' '}
                    {title.split(" ").slice(1).join(" ")}
                  </Typography>

                  <Typography variant="body2" className="pt-2 md:pt-1">
                    {subTitle}
                  </Typography>
                </div>
              </div>

              <div >
                <div className="flex items-center gap-6 sm:w-fit sm:flex-row md:gap-2">
                  <MoreProductButton link={link} />
                  <SliderNavigationButton
                    handleNextSlide={handleNextSlide}
                    handlePrevSlide={handlePrevSlide}
                  />
                </div>
              </div>
            </div>
  )
}
