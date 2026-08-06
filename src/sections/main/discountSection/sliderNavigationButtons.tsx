import { ButtonBase } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import {clsx} from 'clsx';
type NavigationButtonProps = {
  handleNextSlide: MouseEventHandler<HTMLButtonElement>;
  handlePrevSlide: MouseEventHandler<HTMLButtonElement>;
  type?:"primary" | "secondary"
};
export default function SliderNavButtons({
  handleNextSlide,
  handlePrevSlide,
  type="primary"
}: NavigationButtonProps) {
  return (
    <div
      dir="ltr"
      className="flex h-fit items-center gap-3 rounded-2xl  px-1 py-2.5 "
    >
      <ButtonBase
        type="button"
        onClick={handlePrevSlide}
        aria-label="اسلاید قبلی"
        className={clsx(type==="primary"? "bg-custom-4 ":"bg-background-default",
          "flex size-10 items-center justify-center rounded-full  text-text-primary")}
      >
        <FaAngleLeft className={clsx(type ==="primary" && "text-primary-main","size-4")} />
      </ButtonBase>
      <ButtonBase
        type="button"
        onClick={handleNextSlide}
        aria-label="اسلاید بعدی"
        className={clsx(type==="primary"? "bg-custom-4 ":"bg-background-default",
          "flex size-10 items-center justify-center rounded-full  text-text-primary")}
      >
        <FaAngleRight className={clsx(type ==="primary" && "text-primary-main","size-4")} />
      </ButtonBase>
    </div>
  );
}
