import { Metadata } from 'next';
import { ProductTypes } from './_product';

export namespace HomeType {
  export type ActionTypeProps = 'delete' | 'add' | 'edit' | null;

  export type BannerTypeEnum = 1 | 2; // 1=banner , 2=slider
  export type BannerSlot = 1 | 2 | 3 | 4;
  export type SliderSlot = 1 | 2 | 3;

  export type BannerType = {
    id: number;
    image: string;
    link: string;
    name: string;
    type: BannerTypeEnum;
    showTime: BannerSlot | SliderSlot;
  };

  export type EditBannerReqBody = BannerType & {
    _method: 'put';
  };

  // home page api res

  export type BestOfferSections = {
    discount: string;
    img: string;
    subTitle: string;
    title: string;
    products: ProductTypes.Product[];
  };

  export type BestOfferProducts = {
    products: ProductTypes.Product[];
    title: string;
    subTitle: string;
  };

  export type BestProductSection = {
    discount_description: string;
    image: string;
    title: string;
    subTitle: string;
    products: ProductTypes.Product[];
  };

  export type Categories={
      title: string;
      subTitle: string;
      en_name:string
      image: string;
    }
  export type CategorySection = {
    title: string;
    subTitle: string;
    categories: Categories[];
  };

  export type LatestProducts = {
    description: string;
    subTitle: string;
    title: string;
    image: string;
    products: ProductTypes.Product[];
  };

  export type PopularProducts = {
    title: string;
    subTitle: string;
    description?: string;
    products: ProductTypes.Product[];
  };

  export type ProductListSection = {
    description: string;
    subTitle: string;
    title: string;
    products: ProductTypes.Product[];
  };

  export type Testimonials = {
    comments: [];
    subTitle: string;
    title: string;
  };

  export type TopCarouselItem = {
    id: number;
    image: string;
    link: string;
  };

  export type TopRatedProducts = {
    description: string;
    subTitle: string;
    title: string;
    image: string;
    products: ProductTypes.Product[];
  };
  export type GroupParent={
    
      image: string;
      title: string;
      enTitle: string;
    
  }
  
  export type HomeContent = {
    banners: BannerType[];
    bestOffer: BestOfferSections;
    bestProduct: BestProductSection;
    groupParents: GroupParent[];
    bestOfferProducts: BestOfferProducts;
    categoryList: CategorySection;
    latestProducts: LatestProducts;
    metadata: Metadata;
    offerList: ProductTypes.Product[];
    popularProducts: PopularProducts;
    productList: ProductListSection;
    testimonials: Testimonials;
    topCarousel: BannerType[];
    top_rated_products: TopRatedProducts;
  };
}
