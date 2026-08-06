export type LinkedBannerItem = {
  id: number;
  image: string;
  alt: string;
  href: string;
};

export const PRIMARY_LINKED_BANNERS: LinkedBannerItem[] = [
  {
    id: 1,
    image: 'http://files.wtrue.ir/images/banners/368866_96898_AMGPlus.webp',
    alt: 'محصولات ایران خودرو',
    href: '/products?carTitle=ایران خودرو',
  },
  {
    id: 2,
    image: 'http://files.wtrue.ir/images/banners/8897_93443_AMGPlus.png',
    alt: 'محصولات خودروهای چینی',
    href: '/products?carTitle=کرمان موتور',
  },
];

export const SECONDARY_LINKED_BANNERS: LinkedBannerItem[] = [
  {
    id: 3,
    image: 'http://files.wtrue.ir/images/banners/277830_12583_AMGPlus.webp',
    alt: 'محصولات خودروهای ژاپنی و کره‌ای',
    href: '/products?carTitle=ژاپنی و کره‌ای',
  },
  {
    id: 4,
    image: 'http://files.wtrue.ir/images/banners/671135_53413_AMGPlus.png',
    alt: 'محصولات سایپا',
    href: '/products?carTitle=سایپا',
  },
];
