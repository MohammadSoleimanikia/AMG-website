import { ButtonBase, Card, Typography } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProductShowcaseIcon from './productShowcaseIcon';
import { HomeType } from '@/_types/_home';

type ProductShowcaseInfoCardProps = Pick<
  HomeType.ProductListSection,
  'title' | 'subTitle' | 'description'
> & {
  onNext: () => void;
  onPrevious: () => void;
};

export default function ProductShowcaseInfoCard({
  title,
  subTitle,
  description,
  onNext,
  onPrevious,
}: ProductShowcaseInfoCardProps) {
  const navigationButtonClassName =
    '!flex !size-9 !items-center !justify-center !rounded-full !bg-custom-4 !p-0 !text-common-white transition-colors duration-200 hover:!bg-background-paper hover:!text-primary-main lg:!size-10';

  return (
    <Card className="h-full !rounded-3xl bg-primary-main !p-0 text-common-white">
      <div className="flex h-full min-h-[250px] flex-col px-6 py-8 md:min-h-[220px] lg:min-h-[315px] lg:p-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
          <div className="flex shrink-0 rounded-lg bg-background-paper">
            <ProductShowcaseIcon className="size-[50px] p-2 text-common-black lg:size-[60px] lg:p-4" />
          </div>

          <div className="min-w-0 max-w-full overflow-hidden">
            <Typography
              variant="h5"
              className="text-center font-semibold md:text-start"
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              className="mt-0.5 text-center text-grey-200 md:text-start lg:mt-2"
            >
              {subTitle}
            </Typography>
          </div>
        </div>

        <div className="mt-7 flex-1 lg:mt-9">
          <Typography variant="body1" className=" leading-loose">
            {description}
          </Typography>
        </div>

        <div className="mt-auto flex items-center justify-start lg:justify-end gap-2 pt-5">
          <ButtonBase
            type="button"
            onClick={onPrevious}
            className={navigationButtonClassName}
          >
            <IoIosArrowForward className="text-lg lg:text-[1.3rem]" />
          </ButtonBase>

          <ButtonBase
            type="button"
            onClick={onNext}
            className={navigationButtonClassName}
          >
            <IoIosArrowBack className="text-lg lg:text-[1.3rem]" />
          </ButtonBase>
        </div>
      </div>
    </Card>
  );
}
