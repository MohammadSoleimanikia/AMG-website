'use client';

import type { NavBarChildItem, NavBarItem } from '@/_types/_header';

import { Avatar, Button, Container } from '@mui/material';
import { clsx } from 'clsx/lite';
import { useState } from 'react';
import { FiGrid } from 'react-icons/fi';
import { IoCarSportOutline } from 'react-icons/io5';
import Link from 'next/link';

type NavContainerProps = {
  navItem: NavBarItem;
};

export default function NavContainer({ navItem }: NavContainerProps) {
  const [activeCategory, setActiveCategory] = useState<NavBarChildItem | null>(
    navItem.children[0],
  );

  return (
    <Container maxWidth="xxl" className="-mt-8 pt-14">
      <div className="-mt-8 flex min-h-[420px] w-full overflow-hidden rounded-[24px] bg-background-default p-5 shadow-s0">
        {/* Level 2 */}
        <div className="flex w-[240px] flex-shrink-0 flex-col">
          {navItem.children.map((navChild) => {
            const isActive = activeCategory?.id === navChild.id;

            return (
              <Button
                key={navChild.id}
                type="button"
                LinkComponent={
                  navItem.type === 'product' && navChild.path !== 'brands' ? Link : 'div'
                }
                href={
                  navItem.type === 'product' && navChild.path !== 'brands'
                    ? `products/${navChild.path}`
                    : undefined
                }
                size="small"
                variant="text"
                color="inherit"
                disableRipple
                onMouseEnter={() => setActiveCategory(navChild)}
                onFocus={() => setActiveCategory(navChild)}
                className={clsx(
                  'min-h-[64px] w-full justify-start gap-3 rounded-2xl px-4 py-3 text-right text-lg font-medium transition-all duration-200',
                  isActive
                    ? 'bg-primary-main text-common-white shadow-s5 hover:bg-primary-main hover:text-common-white'
                    : 'bg-transparent text-text-primary shadow-none hover:bg-primary-light hover:text-primary-main',
                )}
              >
                {/* Icon */}
                <span
                  className={clsx(
                    'flex size-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-200',
                    isActive
                      ? 'bg-common-white text-text-primary'
                      : 'bg-background-paper text-text-primary',
                  )}
                >
                  {navItem.type === 'product' ? (
                    <FiGrid className="size-5" />
                  ) : (
                    <IoCarSportOutline className="size-5" />
                  )}
                </span>

                {/* Text */}
                <span className="line-clamp-1">{navChild.faName}</span>
              </Button>
            );
          })}
        </div>

        {/* Level 3 */}

        <div className="mr-5 min-w-0 flex-1 rounded-[20px] bg-background-paper p-6">
          {/* product Item */}
          {navItem.type === 'product' && (
            <div className="flex h-full">
              <div className="flex w-[240px] flex-col gap-1">
                {activeCategory?.children?.map((subChild) => (
                  <Link
                    key={subChild.id}
                    href={subChild.path}
                    color="inherit"
                    className="w-full justify-start rounded-lg bg-transparent px-3 py-2 text-right font-medium text-text-primary transition-colors duration-200 hover:text-primary-main"
                  >
                    {subChild.faName}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* car Item */}
          {navItem.type === 'car' && (
            <div className="flex w-full flex-wrap gap-x-12 gap-y-6">
              {activeCategory?.children?.map((car) => (
                <Link
                  key={car.id}
                  href={car.path}
                  color="inherit"
                  className={clsx(
                    'group/car flex min-w-0 flex-col items-center gap-3 rounded-2xl bg-transparent',
                    'text-text-primary transition-colors duration-200 hover:bg-transparent hover:text-primary-main',
                  )}
                >
                  {/* Car icon */}
                  <span
                    className={clsx(
                      'relative flex size-[70px] items-center justify-center overflow-hidden',
                      'rounded-full bg-background-default',
                      'border-2 border-solid border-grey-300',
                      'transition-colors duration-300',
                      'group-hover/car:border-primary-main',
                    )}
                  >
                    {car.cover ? (
                      <Avatar className="size-[70px]" alt={car.en_name} src={car.cover} />
                    ) : (
                      <IoCarSportOutline className="size-10 text-text-secondary transition-colors duration-300 group-hover/car:text-primary-main" />
                    )}
                  </span>

                  <span className="w-full truncate text-center text-base font-medium">
                    {car.faName}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
