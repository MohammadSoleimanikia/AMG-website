import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import clsx from 'clsx';

type GeneralErrorProps = {
  title?: string;
  message?: string;
  className?: string;
  showHomeButton?: boolean;
};

export default function GeneralError({
  title = 'مشکلی پیش آمده است',
  message = 'لطفاً چند لحظه دیگر دوباره تلاش کنید.',
  className,
  showHomeButton = true,
}: GeneralErrorProps) {
  return (
    <div
      className={clsx(
        'flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background-paper px-5 py-10 text-center',
        className,
      )}
    >
      <Typography variant="h5" className="text-error-main">
        {title}
      </Typography>

      <Typography variant="body1" className="max-w-[500px] text-text-secondary">
        {message}
      </Typography>

      {showHomeButton ? (
        <Button component={Link} href="/" variant="contained">
          بازگشت به خانه
        </Button>
        
      ) : null}
    </div>
  );
}