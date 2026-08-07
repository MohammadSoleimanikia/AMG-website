import { HomeType } from '@/_types/_home';
import Image from '@/components/image';
import { Card, Typography } from '@mui/material';
import { title } from 'process';

type LatestProductInfoCardProps = Pick<HomeType.LatestProducts, 'description' | 'image' |"title">;

export default function LatestProductInfoCard({
  description,
  image,
  title
}: LatestProductInfoCardProps) {
  return (
    <Card className="relative hidden overflow-hidden bg-transparent bg-cardProduct !p-0 shadow-s14 lg:block lg:w-1/4 xl:w-1/5">
      <div className="h-full rounded-2xl border border-solid border-custom-6 bg-custom-7 p-[1.875rem] text-center shadow-s13 backdrop-blur-2xl">
        <Typography variant="h5">بازرگانی احمدیان</Typography>

        <div className="mt-4 inline-block size-[100px] rounded-full border border-solid border-custom-6 bg-custom-5 p-[0.625rem] shadow-s13">
          <Image
            src={image}
            alt={description}
            visibleByDefault
            className="size-full rounded-full bg-background-paper [&_img]:rounded-full [&_img]:object-contain"
          />
        </div>

        <Typography variant="body1" className="mt-10 font-medium leading-[1.8]">
          {description}
        </Typography>
      </div>
    </Card>
  );
}
