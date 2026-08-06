import Image from '@/components/image';
import { ProductCollectionData } from '@/mockData/homeProductData';
import { Card, Typography } from '@mui/material';

type ProductCollectionInfoCardProps = Pick<
  ProductCollectionData,
  'description' | 'image'
>;

export default function ProductCollectionInfoCard({
  description,
  image,
}: ProductCollectionInfoCardProps) {
  return (
    <Card className="relative hidden  overflow-hidden bg-transparent bg-cardProduct !p-0 shadow-s14 lg:block lg:w-1/4 xl:w-1/5">
      <div className="h-full rounded-2xl border border-solid border-custom-6 bg-custom-7 p-[1.875rem] text-center shadow-s13 backdrop-blur-2xl">
        <Typography variant="h5">بازرگانی احمدیان</Typography>

        <div className="mt-4 inline-block size-[100px] rounded-full border border-solid border-custom-6 bg-custom-5 p-[0.625rem] shadow-s13">
          <Image
            src={image}
            alt="بازرگانی احمدیان"
            visibleByDefault
            className="size-full rounded-full bg-background-paper [&_img]:rounded-full [&_img]:object-contain"
          />
        </div>

        <Typography variant="body1" className="mt-10 font-medium leading-[1.8]">
          همواره یک قدم جلوتر باشید. اولین نفری باشید که از جدید ترین لوازم جانبی خودرو های وارداتی وداخلی با بهترین شرایط مطلع می شوید
        </Typography>
      </div>
    </Card>
  );
}
