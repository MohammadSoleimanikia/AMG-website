'use client';

import { ProductTypes } from '@/_types/_product';
import ProductShowcaseCard from './productShowcaseCard';

type BestCarsSliderFallbackProps = {
  products: ProductTypes.Product[];
};

export default function ProductShowCaseSliderFallback({
  products,
}: BestCarsSliderFallbackProps) {
  if (!products.length) {
    return null;
  }

  return (
    <div dir="rtl" className="relative w-full overflow-hidden">
      <div className="flex w-full flex-nowrap gap-[10px] min-[576px]:gap-4 min-[990px]:gap-5 min-[1200px]:gap-6">
        {products.map((product) => (
          <div
            key={`${product.id}`}
            className="min-w-0 flex-none basis-[calc((100%-10px)/2)] min-[576px]:basis-[calc((100%-32px)/3)] min-[990px]:basis-[calc((100%-60px)/4)] [&>*]:h-full"
          >
            <ProductShowcaseCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
