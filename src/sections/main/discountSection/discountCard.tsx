import { ProductTypes } from '@/_types/_product';
import Image from '@/components/image';
import LinkComponent from '@/components/linkComponent';
import { PRODUCTS } from '@/path';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';

export default function DiscountCard({
  product,
  type = 'primary',
}: {
  product: ProductTypes.Product;
  type?: 'primary' | 'secondary';
}) {
  return (
    <LinkComponent href={`${PRODUCTS}/${product.en_name}`} className="group block h-full text-center">
      <div
        className={clsx(
          'inline-block size-[3.75rem] overflow-hidden rounded-full leading-none',
          'shadow-s3 transition-colors duration-300',
          'border-0 border-solid border-grey-300',
          'transition-colors duration-300 ',
          'border-4 border-transparent group-hover:border-primary-main ',
          '[&>.wrapper]:size-full [&>.wrapper]:!bg-cover [&_*]:rounded-full',
        )}
      >
        <Image
          visibleByDefault
          src={product.cover}
          alt={product.fa_title}
          className="block h-full w-full object-contain"
        />
      </div>
      <Typography
        variant="body1"
        className={clsx(
          type === 'primary'
            ? 'font-semibold text-common-white'
            : 'font-medium text-common-black',
          'truncate',
        )}
      >
        {product.name}
      </Typography>
    </LinkComponent>
  );
}
