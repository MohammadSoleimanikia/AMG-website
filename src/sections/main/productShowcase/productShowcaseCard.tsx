import Image from '@/components/image';
import { Tooltip, Typography } from '@mui/material';
import LinkComponent from '@/components/linkComponent';
import { IoEyeOutline } from 'react-icons/io5';
import { ProductTypes } from '@/_types/_product';
import { PRODUCTS } from '@/path';

type ProductShowcaseCardProps = {
  product: ProductTypes.Product;
};

export default function ProductShowcaseCard({ product }: ProductShowcaseCardProps) {
  return (
    <article className="group relative flex w-full flex-col overflow-hidden">
      <LinkComponent
        href={product.categoryPath || ""}
        className="flex cursor-grab justify-center overflow-hidden rounded-[20px_20px_30px_30px] bg-background-paper p-3.5 sm:p-8"
      >
        <Image
          visibleByDefault
          src={product.cover}
          alt={product.name}
          className="aspect-square sm:size-[60%] lg:size-32 [&_img]:object-cover"
        />
      </LinkComponent>

      <div className="relative sm:px-5">
        <LinkComponent
          href={`products/${product.en_name}`}
          className="flex min-h-[178px] w-full flex-col justify-between sm:min-h-[153px]"
        >
          <Typography
            variant="subtitle1"
            noWrap
            title={product.name}
            className="mt-6 text-center sm:text-start"
          >
            {product.name}
          </Typography>

          <Typography
            variant="body1"
            noWrap
            className="mt-1 text-center text-text-secondary sm:text-start"
          >
            {product.categoryName}
          </Typography>

          <div className="min-h-[23px]" />

          <div className="mt-auto flex flex-col items-center justify-between pb-5 sm:flex-row">
            <Typography variant="body1" className="text-lg font-bold text-primary-main">
              {product.d.prices.cash}
            </Typography>

            <Typography
              variant="subtitle1"
              className="rounded-full bg-custom-customGreen px-2 pt-px text-common-white shadow-customLightGreen"
            >
              تومان
            </Typography>
          </div>
        </LinkComponent>

        <div className="absolute bottom-[-200px] left-0 right-0 flex items-center justify-between gap-2 rounded-3xl bg-background-paper px-3 py-3.5 transition-all duration-300 ease-in-out group-focus-within:bottom-0 group-hover:bottom-0">
          <Tooltip title="مشاهده جزئیات" placement="top">
            <LinkComponent
              href={`${PRODUCTS}/${product.en_name}`}
              className=" rounded-full bg-warning-main  text-[1.5rem] text-common-white transition-colors duration-200 hover:bg-background-default hover:text-text-secondary focus-visible:bg-background-default focus-visible:text-text-secondary"
            >
              <div className='size-10 flex items-center justify-center'>
                <IoEyeOutline className="size-6" />
              </div>
            </LinkComponent>
          </Tooltip>

          <LinkComponent
            href={`${PRODUCTS}/${product.en_name}`}
            className="rounded-full bg-background-default px-2.5 py-1.5 text-body1 leading-[1.8] transition-all duration-200 hover:bg-primary-main hover:text-common-white focus-visible:bg-primary-main focus-visible:text-common-white"
          >
            جزئیات
          </LinkComponent>
        </div>
      </div>
    </article>
  );
}
