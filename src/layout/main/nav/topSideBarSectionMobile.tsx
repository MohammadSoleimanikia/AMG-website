import LinkComponent from '@/components/linkComponent';
import { ButtonBase, Skeleton } from '@mui/material';
import clsx from 'clsx';
import { FaUser } from 'react-icons/fa6';

export default function TopSideBarSectionMobile() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-cardProduct">
      <div
        className={clsx(
          'mb-6 mt-8 flex size-20 items-center justify-center rounded-full bg-grey-500',
          'border-[9px] border-solid border-common-white',
        )}
      >
        <FaUser className="size-8 text-grey-700" />
      </div>

      <span className="mb-3 h-[50px] w-[150px] text-center text-common-white">
        <Skeleton variant="text" className="h-[50px] w-[150px]" />
      </span>

      <ButtonBase
        LinkComponent={LinkComponent}
        href="/login"
        className="mb-4 h-12 w-28 !rounded-lg bg-common-white text-center font-yekan_bakh font-medium"
      >
        ورود و عضویت
      </ButtonBase>
    </div>
  );
}
