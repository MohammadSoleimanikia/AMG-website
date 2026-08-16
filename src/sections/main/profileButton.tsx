'use client';
import { User } from '@/_types/_user';
import { useUser } from '@/providers/userProvider';
import { Button, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';

type ProfileButtonProps = {
  user: User;
  className?: string;
};
export default function ProfileButton({ user, className = '' }: ProfileButtonProps) {
  const { logout } = useUser();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Button
        onClick={handleClick}
        size="small"
        className={`flex w-44 items-center gap-3 !rounded-2xl bg-background-paper px-4 py-3 text-text-primary ${className}`}
      >
        <Typography className="truncate text-ellipsis font-medium" variant="body2">
          سلام، {user.name}
        </Typography>

        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-main text-common-white shadow-s2 lg:size-9">
          <FaRegUser className="size-4" />
        </span>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className="mt-2"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="flex h-[416px] w-[248px] flex-col gap-4 p-6">
          <Button
            onClick={logout}
            className="text- w-full hover:bg-background-default"
            variant="text"
          >
            <Typography variant="body1">خروج</Typography>
          </Button>
        </div>
      </Popover>
    </>
  );
}
