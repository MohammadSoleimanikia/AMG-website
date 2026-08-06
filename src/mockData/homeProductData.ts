export type HomeProduct = {
  id: number;
  title: string;
  slug: string;
  brand: string;
  price: string;
  oldPrice?: string;
  image: string;
};

export type ProductCollectionData = {
  title: string;
  highlightedTitle?: string;
  subtitle: string;
  description: string;
  image: string;
  moreProductsHref: string;
  products: HomeProduct[];
};

export type CompactProductCarouselData = {
  id: string;
  title: string;
  subtitle: string;
  promotionText: string;
  image: string;
  href: string;
  products: HomeProduct[];
};

export const HOME_PRODUCTS: HomeProduct[] = [
  {
    id: 2756,
    title: 'دستگاه بالابر عقب پراید دستی راست بهینه ابری قدیم',
    slug: 'notset5',
    brand: 'برند ابری',
    price: '858,000',
    image: 'http://files.wtrue.ir/images/products/AMGPLUS-logo.png',
  },
  {
    id: 2749,
    title: 'قفل مکانیکی درب پراید جدید عقب راست - پیوند',
    slug: 'notset2207',
    brand: 'برند پیوند',
    price: '250,000',
    image: 'http://files.wtrue.ir/images/products/891777_26185_AMGPlus.webp',
  },
  {
    id: 2744,
    title: 'تیرک آهنی عقب تیبا چپ',
    slug: 'notset2195',
    brand: 'بازرگانی احمدیان',
    price: '1,180,000',
    image: 'http://files.wtrue.ir/images/products/AMGPLUS-logo.png',
  },
  {
    id: 2742,
    title: 'دستگیره بیرونی پارس سفید - راست',
    slug: 'notset2300',
    brand: 'برند کاوج',
    price: '160,000',
    image: 'http://files.wtrue.ir/images/products/703205_29413_AMGPlus.webp',
  },
  {
    id: 2738,
    title: 'فلاپ ساینا سفید راست - رفلکس',
    slug: 'notset2307',
    brand: 'برند رفلکس',
    price: '165,000',
    image: 'http://files.wtrue.ir/images/products/927204_68849_AMGPlus.jpg',
  },
  {
    id: 2727,
    title: 'فلاپ آینه رنگی 206 سفید راست - کاوج',
    slug: 'notset2215',
    brand: 'برند کاوج',
    price: '99,800',
    image: 'http://files.wtrue.ir/images/products/797873_51391_AMGPlus.webp',
  },
  {
    id: 114,
    title: 'شیشه بالابر پراید جلو سمت چپ',
    slug: 'pride-front-lift-glass',
    brand: 'برند ابری',
    price: '2,650,000',
    oldPrice: '2,900,000',
    image: 'http://files.wtrue.ir/images/products/206946_26135_AMGPlus.jpg',
  },
  {
    id: 115,
    title: 'شیشه بالابر جلو پراید سمت راست',
    slug: 'Pride-lift-glass',
    brand: 'برند ابری',
    price: '2,650,000',
    oldPrice: '2,900,000',
    image: 'http://files.wtrue.ir/images/products/782426_83046_AMGPlus.jpg',
  },
];

export const NEWEST_PRODUCTS_DATA: ProductCollectionData = {
  highlightedTitle: 'جدیدترین',
  title: 'محصولات',
  subtitle: 'جدیدترین مدل‌ها و برندها',
  description:
    'جدیدترین مدل ها و برند ها',
  image: '/images/main/logo.png',
  moreProductsHref: '/products?sort=latest',
  products: HOME_PRODUCTS,
};

export const LIGHT_DEAL_CAROUSEL_DATA: CompactProductCarouselData = {
  id: 'first-deals',
  title: 'اولین‌های ایران زمین',
  subtitle: 'تخفیف‌های ویژه کالاها',
  promotionText: 'تا ۹۰ درصد تخفیف',
  image: 'http://files.wtrue.ir/images/products/865785_57031_AMGPlus.jpg',
  href: '/products?sort=discount',
  products: HOME_PRODUCTS.slice(0, 6),
};

export const PRIMARY_DEAL_CAROUSEL_DATA: CompactProductCarouselData = {
  id: 'best-products',
  title: 'بهترین محصولات ما',
  subtitle: 'فقط امروز تخفیف داریم',
  promotionText: 'تا ۹۰ درصد تخفیف ویژه',
  image: 'http://files.wtrue.ir/images/products/865785_57031_AMGPlus.jpg',
  href: '/products?sort=best_seller',
  products: HOME_PRODUCTS.slice(2, 8),
};
