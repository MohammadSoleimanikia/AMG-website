'use client';

import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react';

type LinkComponentProps = NextLinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & {
    children?: ReactNode;
  };

const LinkComponent = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  function LinkComponent({ children, ...props }, ref) {
    return (
      <NextLink ref={ref} {...props}>
        {children}
      </NextLink>
    );
  },
);

export default LinkComponent;
