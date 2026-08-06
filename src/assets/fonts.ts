import localFont from 'next/font/local';

export const Yekan_Bakh = localFont({
  src: [
    {
      path: '../../public/fonts/yekan-bakh/Yekan-Bakh-FaNum-04-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/yekan-bakh/Yekan-Bakh-FaNum-05-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/yekan-bakh/Yekan-Bakh-FaNum-06-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/yekan-bakh/Yekan-Bakh-FaNum-07-Heavy.woff',
      weight: '900',
      style: 'normal',
    },
  ],

  variable: '--font-yekan-bakh',
  display: 'swap',
});
