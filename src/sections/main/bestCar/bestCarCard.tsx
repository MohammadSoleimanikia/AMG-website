import { HomeType } from '@/_types/_home';
import Image from '@/components/image';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';

type BestCarCardProps = {
  car: HomeType.Categories;
  selected?: boolean;
};

export default function BestCarCard({ car, selected = false }: BestCarCardProps) {
  const href = car.en_name ? `/products/car/${car.en_name}` : '/products/car';

  return (
    <div
      className={clsx(
        'flex w-full flex-col items-center justify-start rounded-[20px] bg-common-white text-center shadow-s4',
        selected && '!bg-custom-customGreen ',
      )}
    >
      <Link
        href={href}
        className="group no-underline flex h-full w-[120px] flex-col items-center rounded-full py-5 child:mx-auto sm:w-[143px] xl:py-[30px]"
        aria-label={`مشاهده محصولات خودروی ${car.title}`}
      >
        <Image
          visibleByDefault
          src={car.image}
          alt={car.title}
          className="transition-transform duration-300 group-hover:scale-[1.06] [&_img]:aspect-square [&_img]:size-[100px] [&_img]:min-h-[100px] [&_img]:min-w-[100px] [&_img]:rounded-full [&_img]:object-cover sm:[&_img]:size-[143px] sm:[&_img]:min-h-[143px] sm:[&_img]:min-w-[143px]"
        />

        <Typography
          variant="body1"
          noWrap
          className={clsx(
            'mt-2.5 line-clamp-1 max-w-full text-common-black font-semibold',
            selected && '!text-common-white',
          )}
        >
          {car.title}
        </Typography>

        <Typography
          variant="body1"
          noWrap
          className={clsx(
            'm-auto mt-2 w-fit rounded-[90px] bg-background-default p-[5px] text-common-black font-light leading-none sm:mt-4 sm:p-[5px_10px]',
            selected && '!bg-custom-customLightGreen !text-text-secondary',
          )}
        >
          {car.subTitle}&nbsp;کالا
        </Typography>
      </Link>
    </div>
  );
}
