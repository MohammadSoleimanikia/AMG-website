'use client';

import { useUser } from '@/providers/userProvider';
import { Button, Skeleton, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';

export default function RegisterButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  const { user, isLoading } = useUser();

  const handleClickOpen = () => {
    setOpen(true);
  };

  if (isLoading) {
    return <Skeleton variant="rounded" width={150} height={44} className={className} />;
  }

  if (user) {
    return (
      <Button
        onClick={handleClickOpen}
        component="div"
        size="small"
        className={`flex items-center gap-3 w-44 !rounded-2xl bg-background-paper px-4 py-3 text-text-primary ${className}`}
      >
        <Typography className="font-medium truncate text-ellipsis" variant="body2">
          سلام، {user.name}
        </Typography>

        <span className="flex shrink-0 shadow-s2 size-7 items-center justify-center rounded-full bg-primary-main text-common-white lg:size-9">
          <FaRegUser className="size-4" />
        </span>
      </Button>
    );
  }

  return (
    <Button
      component={Link}
      href="/login"
      size="small"
      className={`flex items-center gap-3 !rounded-2xl bg-background-paper px-4 py-3 text-text-primary ${className}`}
    >

      ورود و عضویت
      <span className="flex size-7 items-center justify-center rounded-full bg-primary-main text-common-white lg:size-9">
          <FaRegUser className="size-4 shadow-s2" />
        </span>
    </Button>
  );
}
