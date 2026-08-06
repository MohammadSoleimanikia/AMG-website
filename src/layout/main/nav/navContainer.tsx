'use client';

import type { NavBarChildItem, NavBarItem } from '@/_types/_header';

import { Avatar, Button, Container } from '@mui/material';
import { clsx } from 'clsx/lite';
import LinkComponent from '@/components/linkComponent';
import { useState } from 'react';
import { FiGrid } from 'react-icons/fi';
import { IoCarSportOutline } from 'react-icons/io5';
import Link from 'next/link';
import { API_BASE_URL } from '@/utils/config';

type NavContainerProps = {
  item: NavBarItem;
};

export default function NavContainer({ item }: NavContainerProps) {
  const [activeCategory, setActiveCategory] = useState<NavBarChildItem | null>(
    item.children[0],
  );

  return (
    <Container maxWidth="xxl" className="-mt-8 pt-14">
      <div className="-mt-8 flex min-h-[420px] w-full overflow-hidden rounded-[24px] bg-background-default p-5 shadow-s0">
        {/* Level 2 */}
        <div className="flex w-[240px] flex-shrink-0 flex-col">
          {item.children.map((category) => {
            const isActive = activeCategory?.id === category.id;

            return (
              <Button
                key={category.id}
                type="button"   
                LinkComponent={Link}
                href={item.type === 'product' && category.path !=="brands" ? `products/${category.path}` : '#'}
                size="small"
                variant="text"
                color="inherit"
                disableRipple
                onMouseEnter={() => setActiveCategory(category)}
                onFocus={() => setActiveCategory(category)}
                aria-pressed={isActive}
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
                  {item.type === 'product' ? (
                    <FiGrid className="size-5" />
                  ) : (
                    <IoCarSportOutline className="size-5" />
                  )}
                </span>

                {/* Text */}
                <span>{category.faName}</span>
              </Button>
            );
          })}
        </div>

        {/* Level 3 */}

        <div className="mr-5 min-w-0 flex-1 rounded-[20px] bg-background-paper p-6">
          {/* product Item */}
          {item.type === 'product' && (
            <div className="flex h-full">
              <div className="flex w-[240px] flex-col gap-1">
                {activeCategory?.children?.map((subCategory) => (
                  <Button
                    key={subCategory.id}
                    component={LinkComponent}
                    href={subCategory.path}
                    variant="text"
                    color="inherit"
                    size="medium"
                    disableRipple
                    aria-label={`مشاهده ${subCategory.faName}`}
                    className="w-full justify-start rounded-lg bg-transparent px-3 py-2 text-right font-medium text-text-primary transition-colors duration-200 hover:text-primary-main"
                  >
                    {subCategory.faName}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* car Item */}
          {item.type === 'car' && (
            <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9">
              {activeCategory?.children?.map((car) => (
                <Button
                  key={car.id}
                  component={LinkComponent}
                  href={car.path}
                  variant="text"
                  color="inherit"
                  disableRipple
                  aria-label={`مشاهده قطعات خودرو ${car.faName}`}
                  className="group/car flex min-w-0 flex-col gap-3 rounded-2xl bg-transparent text-text-primary transition-colors duration-200 hover:bg-transparent hover:text-primary-main"
                >
                  {/* Car icon */}
                  <span
                    className={clsx(
                      'relative flex size-24 items-center justify-center overflow-hidden',
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
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
