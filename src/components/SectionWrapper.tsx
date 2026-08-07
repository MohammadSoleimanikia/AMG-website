import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Container } from '@mui/material';
import { TOP_PADDING } from '@/utils/layout';

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  container?: boolean;
};

export default function SectionWrapper({
  children,
  className,
  containerClassName,
  container = true,
}: SectionWrapperProps) {
  return (
    <section className={clsx(TOP_PADDING, 'w-full ', className)}>
      {container ? (
        <Container
          maxWidth="xxl"
          disableGutters
          className={clsx('w-full', containerClassName)}
        >
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
}
