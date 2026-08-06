import Image from '@/components/image';
import LinkComponent from '@/components/linkComponent';
import type { HomeProduct } from '@/mockData/homeProductData';
import { Typography } from '@mui/material';
import clsx from 'clsx';

type CompactProductItemProps = {
  product: HomeProduct;
  variant: 'light' | 'primary';
};

export default function CompactProductItem({
  product,
  variant,
}: CompactProductItemProps) {
  return (
    <LinkComponent
      href={`/product/${product.slug}`}
      aria-label={`مشاهده ${product.title}`}
      className="group block h-full text-center"
    >
      <div className="relative mx-auto inline-block w-fit">
        <Image
          src={product.image}
          alt={product.title}
          className="inline-block size-[3.75rem] rounded-full bg-background-paper p-1 [&_*]:rounded-full [&_img]:object-contain sm:size-[4.5rem]"
        />
      </div>

      <Typography
        variant="caption"
        title={product.title}
        className={clsx(
          'mt-2 block truncate text-center transition-colors duration-200 group-hover:text-warning-main',
          variant === 'primary' ? 'text-common-white' : 'text-text-primary',
        )}
      >
        {product.title}
      </Typography>

      <Typography
        variant="caption"
        className={clsx(
          'mt-1 block font-semibold',
          variant === 'primary' ? 'text-common-white' : 'text-text-secondary',
        )}
      >
        {product.price}
      </Typography>
    </LinkComponent>
  );
}
