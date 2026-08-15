'use client';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx/lite';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      className={clsx(
        'flex min-h-screen w-full flex-col items-center justify-center gap-4 rounded-3xl bg-background-paper px-5 py-10 text-center',
      )}
    >
      <Typography variant="h5" className="text-error-main">
        مشکلی پیش آمده است
      </Typography>


      <div className="flex gap-3">
        <Button component={Link} href="/" variant="contained">
          بازگشت به خانه
        </Button>
        <Button onClick={()=>reset()} className="hover:text-common-white" variant="outlined">
          امتحان مجدد
        </Button>
      </div>
    </div>
  );
}
