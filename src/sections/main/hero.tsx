import { TOP_MARGIN } from '@/utils/layout';
import HeroSlider from './hero/heroSlider';
import { HomeType } from '@/_types/_home';

export default function Hero({images}:{images: HomeType.BannerType[]}) {
  return (
    <section className={TOP_MARGIN}>
      <HeroSlider images={images} />
    </section>
  );
}