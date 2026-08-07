'use client';

import CartButton from '@/components/cartButton';
import MobileNavBurgerMenu from '@/layout/main/nav/mobileNavBurgerMenu';
import NavButtonDesktop from '@/layout/main/nav/navBtnDesktop';

import { Container, Slide, useScrollTrigger } from '@mui/material';
import RegisterButton from '../header/components/registerButton';
import { HeaderData } from '@/_types/_header';

export default function NavBar({ headerData }: { headerData: HeaderData }) {
  const isNavHidden = useScrollTrigger();
  return (
    <div className="relative z-10 h-header-mobile">
      <Slide
        in={!isNavHidden}
        timeout={350}
        direction="down"
        unmountOnExit
        appear={false}
      >
        <nav className="z-[1000] h-navbar-mobile w-full bg-background-paper shadow-s0 xl:h-navbar">
          <Container maxWidth="xxl" className="h-full">
            <div className="flex h-full items-center justify-between gap-4">
              {/* desktop nav */}
              <div className="hidden min-w-0 flex-1 items-center gap-2 xl:flex">
                {headerData.menu.map((menuItem) => (
                  <NavButtonDesktop key={menuItem.id} navItem={menuItem} />
                ))}
              </div>

              {/* mobile nav */}
              <div className="xl:hidden">
                <MobileNavBurgerMenu headerData={headerData} />
              </div>

              <div className="hidden xl:block">
                <CartButton />
              </div>

              <div className="h-full xl:hidden">
                <RegisterButton className="h-full" />
              </div>
            </div>
          </Container>
        </nav>
      </Slide>
    </div>
  );
}
