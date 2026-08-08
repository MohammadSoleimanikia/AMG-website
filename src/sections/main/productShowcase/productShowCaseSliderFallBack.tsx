'use client';

import { ProductTypes } from '@/_types/_product';
import ProductShowcaseCard from './productShowcaseCard';

type ProductShowCaseSliderFallbackProps = {
  products: ProductTypes.Product[];
};

export default function ProductShowCaseSliderFallback({
  products,
}: ProductShowCaseSliderFallbackProps) {
  if (!products.length) {
    return null;
  }

  return (
    <div className="flex gap-[10px] sm:gap-4 lg:gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="min-w-0 flex-none basis-[calc((100%_-_10px)_/_2)] sm:basis-[calc((100%_-_32px)_/_3)] lg:basis-[calc((100%_-_60px)_/_4)] [&>*]:h-full"
        >
          <ProductShowcaseCard product={product} />
        </div>
      ))}
    </div>
  );
}