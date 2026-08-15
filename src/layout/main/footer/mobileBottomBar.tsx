'use client';

import { Container } from '@mui/material';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs';
import { FiHome, FiUser } from 'react-icons/fi';

export default function MobileBottomBar() {
  return (
    <div className="relative">
      <Container maxWidth="xxl" className="fixed bottom-2 left-0 z-[100] w-full">
        <nav
          className="rounded-3xl border-t border-solid border-grey-200 bg-background-paper px-4 py-3  xl:hidden"
        >
          <div className="mx-auto flex  items-center justify-between">
            {/* cart */}
            <Link
              href="/cart"
              className="flex items-center gap-2 rounded-full bg-success-main px-5 py-3 text-common-white shadow-success"
            >
              <div className='size-7 flex justify-center items-center bg-custom-customLightGreen rounded-full text-success-main'>
                <BsCart3 className="size-5" />
              </div>
              سبد خرید
            </Link>

            {/* left items */}
            <div className="flex">
              <Link
                href="/profile"
                className="flex size-11 items-center justify-center rounded-full text-text-primary"
              >
                <FiUser className="size-5" />
              </Link>
              <Link
                href="/"
                className="flex size-11 items-center justify-center rounded-full text-text-primary"
              >
                <FiHome className="size-5" />
              </Link>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
