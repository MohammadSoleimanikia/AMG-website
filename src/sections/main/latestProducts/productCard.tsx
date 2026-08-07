import { ProductTypes } from '@/_types/_product';
import Image from '@/components/image';
import LinkComponent from '@/components/linkComponent';
import { PRODUCTS } from '@/path';
import { ButtonBase, Card, Tooltip, Typography } from '@mui/material';
import { IoEyeOutline } from 'react-icons/io5';

type ProductCardProps = {
  product: ProductTypes.Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const href = `${PRODUCTS}/${product.en_name}`;

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden !rounded-3xl bg-background-paper !p-0 shadow-s16">
      <div className="absolute right-4 top-4 z-10">
        <Tooltip title="مشاهده جزئیات" placement="top">
          <ButtonBase
            LinkComponent={LinkComponent}
            href={href}
            className="hidden !size-9 !items-center !justify-center !rounded-full bg-background-default text-text-primary transition-colors duration-200 hover:bg-primary-main hover:text-common-white sm:!flex"
          >
            <IoEyeOutline className="size-5" />
          </ButtonBase>
        </Tooltip>
      </div>

      <LinkComponent
        href={href}
        className="flex flex-1 flex-col justify-between"
      >
        <div className="flex items-center justify-center px-10 py-3 sm:pt-10 md:px-12">
          <Image
            src={product.cover}
            alt={product.name}
            className="size-full [&_img]:object-contain [&_img]:transition-transform [&_img]:duration-300"
          />
        </div>

        <div className="flex flex-col px-4 pb-4 sm:px-5 sm:pb-5">
          <Typography
            variant="body1"
            title={product.name}
            className="min-h-12 truncate font-medium leading-6 text-text-primary"
          >
            {product.name}
          </Typography>

          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end">
            <div className="min-w-0">
              <Typography
                variant="subtitle2"
                className="truncate font-bold text-text-primary"
              >
                {product.d.prices.cash}
              </Typography>
            </div>

            <span className="shrink-0 rounded-full bg-primary-main px-2.5 py-1 text-xs text-common-white shadow-primary">
              تومان
            </span>
          </div>
        </div>
      </LinkComponent>
    </Card>
  );
}
