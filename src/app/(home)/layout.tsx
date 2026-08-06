import '@/assets/main.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '@/layout/main/footer/footer';
import HomeHeader from '@/layout/main/header/header';
import CacheProvider from '@/theme/CacheProvider';
import { Yekan_Bakh } from '@/assets/fonts';

import ThemeProvider from '@/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`h-screen w-full ${Yekan_Bakh.variable} ${Yekan_Bakh.className}`}
    >
      <body id="__next">
        <CacheProvider>
          <ThemeProvider>
            <HomeHeader />
            <main className="min-h-screen bg-background-default pb-4 pt-[calc(76px+56px)] xl:pt-[calc(116px+64px)]">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
