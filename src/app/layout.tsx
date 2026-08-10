import '@/assets/main.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '@/layout/main/footer';
import HomeHeader from '@/layout/main/header';
import CacheProvider from '@/theme/CacheProvider';
import { Yekan_Bakh } from '@/assets/fonts';

import ThemeProvider from '@/theme';
import { Toaster } from 'react-hot-toast';
import UserProvider from '@/providers/userProvider';

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
        <UserProvider>
          <CacheProvider>
            <ThemeProvider>
              <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#343A40',
                    color: '#fff',
                  },
                  icon: '✅',
                }}
              />
              <HomeHeader />
              <main className="bg-background-default pt-[calc(76px+56px)] xl:pt-[calc(116px+60px)]">
                {children}
              </main>
              <Footer />
            </ThemeProvider>
          </CacheProvider>
        </UserProvider>
      </body>
    </html>
  );
}
