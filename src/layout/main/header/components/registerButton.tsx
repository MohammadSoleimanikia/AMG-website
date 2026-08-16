'use client';

import { useUser } from '@/providers/userProvider';
import ProfileButton from '@/sections/main/profileButton';
import { Button, Skeleton } from '@mui/material';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa6';

export default function RegisterButton({ className }: { className?: string }) {

  const { user, isLoading } = useUser();


  if (isLoading) {
    return <Skeleton variant="rounded" width={150} height={44} className={className} />;
  }

  if (user) {
    return (
      <ProfileButton user={user} className={className}/>
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
