import { HomeType } from '@/_types/_home';
import Image from '@/components/image';
import LinkComponent from '@/components/linkComponent';
import { TOP_MARGIN } from '@/utils/layout';
import { Grid } from '@mui/material';
import clsx from 'clsx';

type HeroGridProps = {
  images: string[];
};

export default function HeroGrid({ images }:{images:HomeType.GroupParent[]} ) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4 }}
      className={clsx(TOP_MARGIN, 'h-full w-full')}
    >
      {images.map((image, index) => (
        <Grid key={image.enTitle} size={{ xs: 2, md: 1 }}>
          <LinkComponent
            key={image.enTitle}
            href="/products"
            className="2xl:min-h-[233px] block size-full overflow-hidden rounded-xl"
          >
            <div className="block h-full w-full overflow-hidden leading-none [&>.wrapper]:size-full [&>.wrapper]:!bg-cover [&_img]:h-full [&_img]:w-full [&_img]:!rounded-xl [&_img]:object-contain">
              <div className="wrapper inline-block">
                <Image
                  visibleByDefault
                  className="size-full [&_img]:aspect-[1.9/1] [&_img]:object-cover"
                  src={image.image}
                  alt={image.title}
                />
              </div>
            </div>
          </LinkComponent>
        </Grid>
      ))}
    </Grid>
  );
}
