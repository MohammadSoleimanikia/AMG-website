'use client';

import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

// ----------------------------------------------------------------------

interface Props extends LazyLoadImageProps {
  disabledEffect?: boolean;
}

export default function Image({
  disabledEffect = false,
  effect = 'opacity',
  visibleByDefault,
  ...other
}: Props) {
  return (
    <div
      className={`block overflow-hidden leading-none [&>.wrapper]:size-full [&>.wrapper]:!bg-cover ${other.className || ''}`}>
      {visibleByDefault ? (
        <span className="wrapper inline-block">
          {other.src ? (
            <img {...other} className="!size-full" />
          ) : (
            <img {...other} className="!size-full" src={'/svg/placeholder.svg'} />
          )}
        </span>
      ) : (
        <LazyLoadImage
          effect={disabledEffect ? undefined : effect}
          placeholderSrc={'/svg/placeholder.svg'}
          {...other}
          wrapperClassName="wrapper"
          className={'size-full'}
        />
      )}
    </div>
  );
}