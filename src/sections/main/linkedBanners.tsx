import { HomeType } from '@/_types/_home';
import Image from '@/components/image';
import {  TOP_PADDING } from '@/utils/layout';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

type LinkedBannersProps = {
  banners: HomeType.BannerType[];
};

export default function LinkedBanners({ banners }: LinkedBannersProps) {
  return (
    <section >
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {banners.map((banner) => (
          <Grid
            key={banner.id}
            component={Link}
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
