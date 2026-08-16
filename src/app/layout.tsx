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
import { getCookie } from '@/services/cookie/getCookie';
import { SWRConfig } from 'swr';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getCookie('accessToken');
  
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${Yekan_Bakh.variable} ${Yekan_Bakh.className}`}
    >
      <body id="__next" className="min-h-screen">
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
                success: {
                  icon: '✅',
                },
                error: {
                  icon: '❌',
                },
              }}
            />
            <SWRConfig value={{
              errorRetryCount:3,
              revalidateOnFocus:false
            }}>
              <UserProvider token={token}>
                <HomeHeader />

                <main className="min-h-screen bg-background-default pt-[calc(76px+60px)] xl:pt-[calc(116px+65px)]">
                  {children}
                </main>
                <Footer />
              </UserProvider>
            </SWRConfig>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
