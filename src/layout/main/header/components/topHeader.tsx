'use client';

import clsx from 'clsx/lite';
import React, { useEffect, useState } from 'react';
import Image from '@/components/image';
import NotificationButton from '@/layout/main/header/components/notificationButton';
import RegisterButton from '@/layout/main/header/components/registerButton';
import SearchInput from '@/layout/main/header/components/searchInput';
import { Container, useScrollTrigger } from '@mui/material';
import { HeaderData } from '@/_types/_header';
import Link from 'next/link';
export default function TopHeader({headerData}:{headerData:HeaderData}) {
 const isHeaderShrunk = useScrollTrigger({
  disableHysteresis: true,
  threshold: 120,
});
  const isNavHidden = useScrollTrigger();
  return (
    <div
      className={clsx(
        'relative z-[999] w-full',
        'bg-background-default transition-all duration-500',
        'h-[76px]',
        isHeaderShrunk ? 'xl:h-[80px]' : 'xl:h-[116px]',
        isNavHidden && 'shadow-s0',
      )}
    >
      <Container maxWidth="xxl" className="h-full">
        {/* logo,search and action buttons */}
        <div
          className={clsx(
            'flex h-full items-center justify-between',
            'gap-3 sm:gap-5 xl:gap-7',
            'xl:justify-start',
          )}
        >
          {/* logo and search */}
          <div className="flex h-full flex-1 items-center justify-between gap-6 xl:justify-start">
            {/* logo */}
            <Link href={headerData.siteData.url}  className="h-full py-2">
              <Image
                visibleByDefault
                src={headerData.siteData.logo}
                alt="لوگوی فروشگاه"
                className={clsx(
                  'size-full [&_img]:object-contain [&_img]:transition-transform [&_img]:duration-300',
                )}
              />
            </Link>

            <SearchInput />
          </div>

          {/* action Buttons */}
          <div className="hidden items-center gap-2 xl:flex">
            <NotificationButton />
            <RegisterButton />
          </div>
        </div>
      </Container>
    </div>
  );
}
