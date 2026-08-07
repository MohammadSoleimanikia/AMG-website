import { HomeType } from '@/_types/_home';
import Image from '@/components/image';
import LinkComponent from '@/components/linkComponent';
import {  TOP_PADDING } from '@/utils/layout';
import Grid from '@mui/material/Grid';

type LinkedBannersProps = {
  banners: HomeType.BannerType[];
};

export default function LinkedBanners({ banners }: LinkedBannersProps) {
  return (
    // dont use padding cause we need padding bottom for this
    <section className={TOP_PADDING}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {banners.map((banner) => (
          <Grid
            key={banner.id}
            component={LinkComponent}
            href={banner.name}
            scroll
            size={{ xs: 12, md: 6 }}
            className="block"
          >
            <Image
              src={banner.image}
              alt={banner.name}
              visibleByDefault
              className="relative z-[1] h-full rounded-3xl [&_img]:aspect-[3/1] [&_img]:rounded-3xl [&_img]:object-cover"
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
