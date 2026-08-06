import { Container } from '@mui/material';
import BestCars from './bestCars';
import Hero from './hero';
import ProductShowcase from './productShowcase';
import BestOffer from './bestOffer';
import LinkedBanners from './linkedBanners';
import HeroGrid from './hero/heroGrid';
import LatestProducts from './latestProducts';

import { fetchHomeData } from '@/services/homeDataService';
import BestProducts from './bestProducts';

export default async function MainHome() {
  const homeData = await fetchHomeData();
  if (!homeData.data) {
    return <p>مشکلی پیش آمده است</p>;
  }

  return (
    <div className="overflow-hidden">
      <Container maxWidth="xxl">
        <Hero images={homeData.data.topCarousel} />
        <HeroGrid images={homeData.data.groupParents} />
      </Container>

      <BestCars bestCarData={homeData.data.categoryList} />
      <ProductShowcase productList={homeData.data.productList} />

      {/* linked banner */}
      <div className="relative bg-common-white">
        <Container maxWidth="xxl" className="relative">
          <LinkedBanners banners={[homeData.data.banners[0], homeData.data.banners[1]]} />
        </Container>
        {/* svg pattern */}
        <div className="absolute bottom-0 left-0 w-full rotate-[180deg] -scale-x-100 transform overflow-hidden leading-[0]">
          <svg
            className="h-[144px] w-[100%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path className="fill-background-default" d="M0,6V0h1000v100L0,6z"></path>
          </svg>
        </div>
      </div>
      <LatestProducts data={homeData.data.latestProducts} />
      <BestOffer discountData={homeData.data.bestOffer} type="secondary" />
      <Container maxWidth="xxl" className="relative">
        <LinkedBanners banners={[homeData.data.banners[2], homeData.data.banners[3]]} />
      </Container>
      <BestProducts discountData={homeData.data.bestProduct} type="primary" />
    </div>
  );
}
