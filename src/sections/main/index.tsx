import { Container } from '@mui/material';
import BestCars from './bestCars';
import ProductShowcase from './productShowcase';
import BestOffer from './bestOffer';
import LinkedBanners from './linkedBanners';
import HeroGrid from './hero/heroGrid';
import LatestProducts from './latestProducts';

import { fetchHomeData } from '@/services/homeDataService';
import BestProducts from './bestProducts';
import SectionWrapper from '@/components/SectionWrapper';
import HeroSlider from './hero/heroSlider';
import LatestProductsSVG from './linkedBanners/latestProductsSVG';
import BestProductsSVG from './bestProducts/bestProductsSVG';
import GeneralError from '@/components/errorComponent';

export default async function MainHome() {
  const homeData = await fetchHomeData();
  if (!homeData.success || !homeData.data) {
    return <GeneralError message={homeData.message} />;
  }
  return (
    <div className="overflow-hidden">
      <SectionWrapper>
        <HeroSlider images={homeData.data.topCarousel} />
      </SectionWrapper>

      <SectionWrapper>
        <HeroGrid images={homeData.data.groupParents} />
      </SectionWrapper>

      <SectionWrapper container={false}>
        <BestCars bestCarData={homeData.data.categoryList} />
      </SectionWrapper>

      <SectionWrapper containerClassName="bg-common-white" className="bg-common-white">
        <ProductShowcase productList={homeData.data.productList} />
      </SectionWrapper>

      {/* linked banner */}
      <div className="relative bg-common-white">
        <SectionWrapper containerClassName="relative">
          <LinkedBanners banners={[homeData.data.banners[0], homeData.data.banners[1]]} />
        </SectionWrapper>
        {/* svg pattern */}
        <div className="absolute bottom-0 left-0 w-full rotate-[180deg] -scale-x-100 transform overflow-hidden leading-[0]">
          <LatestProductsSVG />
        </div>
      </div>

      <SectionWrapper>
        <LatestProducts data={homeData.data.latestProducts} />
      </SectionWrapper>

      <SectionWrapper>
        <BestOffer discountData={homeData.data.bestOffer} type="secondary" />
      </SectionWrapper>

      <SectionWrapper className="relative">
        <LinkedBanners banners={[homeData.data.banners[2], homeData.data.banners[3]]} />
      </SectionWrapper>

      <SectionWrapper className="relative bg-common-white">
        <BestProducts discountData={homeData.data.bestProduct} type="primary" />
        <BestProductsSVG />
      </SectionWrapper>
    </div>
  );
}
