import { HomeType } from '@/_types/_home';
import Image from '@/components/image';
import { PRODUCTS } from '@/path';
import { Typography } from '@mui/material';
import clsx from 'clsx/lite';
import Link from 'next/link';

type BestCarCardProps = {
  car: HomeType.Categories;
  selected?: boolean;
};

export default function BestCarCard({ car, selected = false }: BestCarCardProps) {
  const href = car.en_name ? `${PRODUCTS}/car/${car.en_name}` : `${PRODUCTS}/car`;

  return (
    <div
      className={clsx(
        'flex w-full flex-col items-center justify-start rounded-[20px] bg-common-white text-center shadow-s4',
        selected && '!bg-custom-customGreen',
      )}
    >
      <Link
        href={href}
        className="group flex h-full w-[120px] flex-col items-center rounded-full py-5 no-underline child:mx-auto sm:w-[143px] xl:py-[30px]"
      >
        <Image
          visibleByDefault
          src={car.image}
          alt={car.title}
          className="transition-transform duration-300 group-hover:scale-[1.06] [&_img]:aspect-square [&_img]:size-[100px] [&_img]:min-h-[100px] [&_img]:min-w-[100px] [&_img]:rounded-full [&_img]:object-cover [&_img]:will-change-transform sm:[&_img]:size-[143px] sm:[&_img]:min-h-[143px] sm:[&_img]:min-w-[143px]"
        />

        <Typography
          variant="body1"
          noWrap
          className={clsx(
            'mt-2.5 line-clamp-1 max-w-full font-semibold text-common-black',
            selected && '!text-common-white',
          )}
        >
          {car.title}
        </Typography>

        <Typography
          variant="body1"
          noWrap
          className={clsx(
            'm-auto mt-2 w-fit rounded-[90px] bg-background-default p-[5px] font-light leading-none text-common-black sm:mt-4 sm:p-[5px_10px]',
            selected && '!bg-custom-customLightGreen !text-text-secondary',
          )}
        >
          {car.subTitle}&nbsp;کالا
        </Typography>
      </Link>
    </div>
  );
}
