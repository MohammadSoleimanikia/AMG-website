'use client';
import { useUser } from '@/providers/userProvider';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';

export default function RegisterButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { user } = useUser();
  // user logged in 
  if (user !== null) {
    return (
      <Button
        onClick={handleClickOpen}
        component={'div'}
        size="small"
        className={`flex items-center gap-3 !rounded-2xl bg-background-paper px-4 py-3 text-text-primary ${className}`}
      >
        <Typography className="font-medium" variant="body2">
          سلام، {user.name}
        </Typography>
        <span className="flex size-7 items-center justify-center rounded-full bg-primary-main text-common-white lg:size-9">
          <FaRegUser className="size-4 shadow-s2" />
        </span>
      </Button>
    );
  }

  // guest user
  return (
    <Button
      component={Link}
      href="/login"
      size="small"
      className={`flex items-center gap-3 !rounded-2xl bg-background-paper px-4 py-3 text-text-primary ${className}`}
    >
      <Typography className="font-medium" variant="body2">
        ورود و عضویت
      </Typography>
      <span className="flex size-7 items-center justify-center rounded-full bg-primary-main text-common-white lg:size-9">
        <FaRegUser className="size-4 shadow-s2" />
      </span>
    </Button>
  );
}
