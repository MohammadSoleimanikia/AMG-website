import LinkComponent from '@/components/linkComponent';
import { ButtonBase } from '@mui/material';
import clsx from 'clsx';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

export default function MoreProductButton({ link = '#' }: { link?: string }) {
  return (
    <ButtonBase
      LinkComponent={LinkComponent}
      href={link}
      className={clsx("shadow-s12 !rounded-2xl bg-background-paper transition-colors duration-300",
        " h-full flex items-center",
        "gap-2 px-3.5 py-3 font-medium hover:bg-warning-main hover:text-common-white group")} 
    >
      <span className="size-8 rounded-full bg-warning-main p-2 !leading-relaxed text-common-white shadow-s10 transition-colors duration-200 group-hover:bg-background-paper group-hover:text-warning-main group-hover:shadow-none">
        <HiOutlineShoppingBag className="size-full" />
      </span>
      <span className="sm:inline">محصولات بیشتر</span>
    </ButtonBase>
  );
}
