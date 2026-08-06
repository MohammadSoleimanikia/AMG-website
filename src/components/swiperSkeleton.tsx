import { Skeleton } from '@mui/material';
import clsx from 'clsx';

type SwiperSkeletonProps = {
  count?: number;
  className?: string;
  itemClassName?: string;
};

export default function SwiperSkeleton({
  count = 4,
  className,
  itemClassName,
}: SwiperSkeletonProps) {
  return (
    <div className={clsx('grid grid-flow-col gap-3 overflow-hidden md:gap-5', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={clsx(
            'min-w-0 rounded-3xl bg-background-paper p-3 shadow-s16',
            itemClassName,
          )}
        >
          <Skeleton variant="rounded" className="aspect-square w-full rounded-2xl" />
          <Skeleton variant="text" className="mt-4 h-7 w-full" />
          <Skeleton variant="text" className="h-5 w-2/3" />
          <Skeleton variant="rounded" className="mt-5 h-9 w-full rounded-full" />
        </div>
      ))}
    </div>
  );
}
