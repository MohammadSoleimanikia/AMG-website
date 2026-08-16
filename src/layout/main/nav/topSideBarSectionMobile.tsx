import { useUser } from '@/providers/userProvider';
import { ButtonBase, Skeleton, Typography } from '@mui/material';
import clsx from 'clsx/lite';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa6';

export default function TopSideBarSectionMobile() {
  const { user, isLoading } = useUser();
  return (
    <div className="flex w-full flex-col items-center justify-center bg-cardProduct">
      <div
        className={clsx(
          'mb-6 mt-8 flex size-[90px] items-center justify-center rounded-full bg-grey-400',
          'border-[9px] border-solid border-common-white',
        )}
      >
        <FaUser className="size-9 text-grey-700" />
      </div>

      {isLoading || !user ? (
        <span className="mb-3 h-[50px] w-[150px] text-center text-common-white">
          <Skeleton variant="text" className="h-[50px] w-[150px]" />
        </span>
      ) : (
        <Typography variant="body1" className="mb-3 text-common-white">
          سلام {user.name}
        </Typography>
      )}

      <ButtonBase
        LinkComponent={Link}
        href="/login"
        className="mb-4 h-12 !rounded-lg bg-common-white p-3 text-center font-yekan_bakh font-medium"
      >
        {isLoading || !user ? 'ورود و عضویت' : 'پروفایل'}
      </ButtonBase>
    </div>
  );
}
