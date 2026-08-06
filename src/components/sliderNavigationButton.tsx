import { ButtonBase } from '@mui/material';
import type { MouseEventHandler } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

type NavigationButtonProps = {
  handleNextSlide: MouseEventHandler<HTMLButtonElement>;
  handlePrevSlide: MouseEventHandler<HTMLButtonElement>;
};

export default function SliderNavigationButton({
  handleNextSlide,
  handlePrevSlide,
}: NavigationButtonProps) {
  return (
    <div
      dir="ltr"
      className="flex h-fit items-center gap-1 rounded-2xl bg-background-paper px-1 py-2.5 shadow-s12"
    >
      <ButtonBase
        type="button"
        onClick={handleNextSlide}
        aria-label="اسلاید قبلی"
        className="flex size-9 items-center justify-center rounded-full bg-common-white text-text-primary"
      >
        <FaAngleLeft className="size-4" />
      </ButtonBase>
      <ButtonBase
        type="button"
        onClick={handlePrevSlide}
        aria-label="اسلاید بعدی"
        className="flex size-9 items-center justify-center rounded-full bg-common-white text-text-primary"
      >
        <FaAngleRight className="size-4" />
      </ButtonBase>
    </div>
  );
}
