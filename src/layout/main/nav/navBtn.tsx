'use client';

import type { NavBarItem } from '@/_types/_header';
import LinkComponent from '@/components/linkComponent';
import NavContainer from '@/layout/main/nav/navContainer';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';

type NavButtonProps = {
  navItem: NavBarItem;
};

export default function NavButton({ navItem }: NavButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  // check null and length 
  const hasChildren = (navItem.children?.length ?? 0)> 0;

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
        component={LinkComponent}
        href={navItem.path ?? '#'}
        size="small"
        variant={hasChildren ? 'text' : 'contained'}
        className={clsx(
          'h-9 !rounded-xl px-4 font-medium transition-all duration-200',
          hasChildren &&
            !isOpen &&
            'bg-transparent text-text-primary hover:bg-primary-main hover:text-common-white',
          hasChildren &&
            isOpen &&
            'bg-primary-main text-common-white shadow-s5 hover:bg-primary-main hover:text-common-white',
          !hasChildren &&
            'bg-primary-light text-text-primary hover:bg-primary-main hover:text-common-white',
        )}
        
      >
        <Typography variant="body1">{navItem.faName}</Typography>
      </Button>

      {hasChildren && isOpen ? (
        <div className="absolute inset-x-0 top-full z-50 pt-3">
          <NavContainer item={navItem} />
        </div>
      ) : null}
    </div>
  );
}
