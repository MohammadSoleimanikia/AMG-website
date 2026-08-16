'use client';

import type { NavBarItem } from '@/_types/_header';
import NavContainer from '@/layout/main/nav/navContainer';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx/lite';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { normalizePath } from '@/utils/normalizePath';

type NavButtonProps = {
  navItem: NavBarItem;
};

export default function NavButtonDesktop({ navItem }: NavButtonProps) {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);
  const itemPath = normalizePath(navItem.path);
  const [isOpen, setIsOpen] = useState(false);
  // check null and length
  const hasChildren = (navItem.children?.length ?? 0) > 0;
  const isActive =
    Boolean(itemPath) &&
    (itemPath === '/'
      ? currentPath === '/'
      : currentPath === itemPath || currentPath.startsWith(`${itemPath}/`));
  const handleMouseEnter = () => {
    if (hasChildren) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="group flex h-full items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        component={navItem.path ? Link : 'div'}
        href={navItem.path ? navItem.path : undefined}
        size="small"
        className={clsx(
          'h-9 !rounded-xl px-4 font-medium transition-all duration-200',

          !isOpen &&
            !isActive &&
            'bg-transparent text-text-primary hover:bg-primary-main hover:text-common-white',
          isOpen &&
            'bg-primary-main text-common-white shadow-s5 hover:bg-primary-main hover:text-common-white',
          isActive &&
            'bg-primary-light text-text-primary hover:bg-primary-main hover:text-common-white',
        )}
      >
        <Typography variant="body1" className="text-base font-medium">
          {navItem.faName}
        </Typography>
      </Button>

      {hasChildren && isOpen ? (
        <div className="absolute inset-x-0 top-full z-50 pt-3">
          <NavContainer navItem={navItem} />
        </div>
      ) : null}
    </div>
  );
}
