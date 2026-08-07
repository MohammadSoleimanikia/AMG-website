import { FooterFeatures } from '@/_types/_footer';
import setSvgHtml from '@/utils/setSvgHtml';
import {  Container, Typography } from '@mui/material';
import clsx from 'clsx';

export default function StoreFeatures({features}:{features:FooterFeatures}) {
  return (
    <Container maxWidth="xxl">
      <div className={clsx("relative pt-4")}>
        <Typography
          component="h2"
          variant="caption"
          className="absolute right-4 top-0 z-10 rounded-full bg-background-default px-4 py-2 text-base shadow-s3 sm:right-8"
        >
         {features.title}
        </Typography>

        <div
          className="!rounded-3xl !border !border-solid !border-grey-200  !px-5 !py-7 bg-background-paper sm:!px-8"
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 xl:grid-cols-4">
            {features.items.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex min-w-0 items-center gap-4">
                  <span className="flex size-[60px] shrink-0 items-center justify-center rounded-full  p-3  shadow-s3">
                    <div className='size-full [&_svg]:size-full' dangerouslySetInnerHTML={setSvgHtml(feature.icon)}></div>
                  </span>

                  <div className="min-w-0">
                    <Typography
                      variant="subtitle1"
                      className="font-bold text-text-primary"
                    >
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" className="mt-0.5 text-text-secondary">
                      {feature.subtitle}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
