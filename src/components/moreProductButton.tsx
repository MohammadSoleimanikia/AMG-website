import { Button } from '@mui/material';
import clsx from 'clsx/lite';
import Link from 'next/link';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

export default function MoreProductButton({ link = null }: { link?: string | null }) {
  return (
    <Button
      // if we haven't link converted to a div element
      component={link ? Link : 'div'}
      href={link || undefined}
      className={clsx(
        '!rounded-2xl text-common-black bg-background-paper shadow-s12 transition-colors duration-300',
        'flex h-full items-center',
        'group gap-2 px-3.5 py-3 font-medium hover:bg-warning-main hover:text-common-white',
      )}
    >
      <span
        className={clsx(
          'size-8 rounded-full bg-warning-main p-2 !leading-relaxed text-common-white',
          ' shadow-s10 transition-colors duration-200 group-hover:bg-background-paper',
          ' group-hover:text-warning-main group-hover:shadow-none',
        )}
      >
        <HiOutlineShoppingBag className="size-full" />
      </span>
      <span className="sm:inline">محصولات بیشتر</span>
    </Button>
  );
}
