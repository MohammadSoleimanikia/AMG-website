import Image from '@/components/image';
import LinkComponent from '@/components/linkComponent';
import { TOP_MARGIN } from '@/utils/layout';
import { Card, Container, Paper, Typography } from '@mui/material';
import clsx from 'clsx/lite';
import { FiGrid } from 'react-icons/fi';
import { TbWorld } from 'react-icons/tb';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import StoreFeatures from '@/layout/main/footer/storeFeatures';
import MobileBottomBar from './mobileBottomBar';
import { fetchFooterData } from '@/services/footerDataService';
import FooterMenu from './footerMenu';
import SocialLink from './socialLink';

const processItems = [
  { id: 1, title: 'تیکت', icon: "https://amgplus.ir/img/discussion.png" },
  { id: 2, title: 'سفارش کالا', icon: "https://amgplus.ir/img/barcode.png" },
  { id: 3, title: 'ارسال رایگان', icon: "https://amgplus.ir/img/truck.png" },
  { id: 4, title: 'پشتیبانی', icon: "https://amgplus.ir/img/worker.png" },
];

export default async function Footer() {
  const footerData = await fetchFooterData();
  if (!footerData.data) {
    return <p>مشکلی پیش آمده است</p>;
  }

  return (
    <footer className={clsx(TOP_MARGIN, 'bg-background-paper pb-24 pt-24 xl:pb-0')}>
      <StoreFeatures features={footerData.data.features} />
      <Container maxWidth="xxl">
        <div className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-[repeat(14,minmax(0,1fr))]">
          <Card className="order-1 bg-primary-main !p-7 text-center text-common-white shadow-s9 xl:order-none xl:col-span-3">
            <div className="mx-auto size-[100px] rounded-full bg-background-paper p-4">
              <Image
                src={footerData.data.description.image}
                alt={footerData.data.description.content}
                visibleByDefault
                className="size-full rounded-full [&_img]:rounded-full [&_img]:object-contain"
              />
            </div>
            <Typography className="mt-5 leading-relaxed text-common-white">
              {footerData.data.description.content}
            </Typography>
          </Card>

          <Card className="order-2 bg-background-default !p-6 xl:order-none xl:col-span-8">
            <div className="flex flex-wrap justify-between gap-8">
              <FooterMenu menu={footerData.data.links} />
              <FooterMenu menu={footerData.data.links_2} />
              <FooterMenu menu={footerData.data.links_3} />
            </div>

            {/* below menu */}
            <div
              className={clsx(
                'mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-common-white p-10',
                'lg:grid-cols-4',
              )}
            >
              {processItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="text-center">
                    <span className="mx-auto flex size-11 items-center justify-center rounded-2xl">
                      <Image src={item.icon} className="size-full" />
                    </span>
                    <Typography variant="body1" className="mt-2 block">
                      {item.title}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </Card>

          <div className="order-3 flex flex-col justify-center gap-4 xl:order-none xl:col-span-3 xl:justify-start">
            {/* mail section */}
            <div className="flex items-center justify-center gap-3 text-sm text-text-primary xl:justify-end">
              <LinkComponent
                className="pt-1 text-lg font-semibold"
                href={`mailto:${footerData.data.email ? footerData.data.email : 'example@mail.com'}`}
              >
                {footerData.data.email ? footerData.data.email : 'example@gmail.com'}
              </LinkComponent>
              <span className="flex size-14 items-center justify-center rounded-xl bg-background-default shadow-s3">
                <HiOutlineMail className="size-[60px] rounded-2xl bg-background-default p-4" />
              </span>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4 xl:justify-end">
              <a href={`tel:${footerData.data.phone}`}>
                <span className="text-left text-sm">
                  <strong className="block text-left text-2xl font-extrabold text-error-main">
                    +۹۸
                  </strong>
                  <span className="pt-1 text-lg font-normal">
                    {footerData.data.phone}
                  </span>
                </span>
              </a>
              <a href={`tel:${footerData.data.phone}`}>
                <span className="flex items-center gap-3 rounded-2xl bg-error-main px-4 py-3 shadow-error">
                  <span className="pt-0.5 text-lg font-medium text-common-white">
                    موبایل
                  </span>
                  <span className="size-9 rounded-full bg-error-dark p-2">
                    <HiOutlinePhone className="size-full text-common-white" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Typography variant="body1" className="text-center leading-loose xl:text-start">
            بزرگترین لوازم یدکی شرق کشور بزرگترین لوازم یدکی شرق کشور بزرگترین لوازم یدکی
            شرق کشور بزرگترین لوازم یدکی شرق کشور
          </Typography>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:justify-between">
            <div className="flex items-center gap-3">
              <span className="size-9 min-w-9 rounded-full bg-primary-main p-2 text-common-white shadow-s5">
                <IoLocationOutline className="size-full" />
              </span>
              <p className=" text-lg">{footerData.data.address}</p>
            </div>

            {/* social links */}
            <div className="flex gap-3">
              {footerData.data.socialMedias.map((link) => (
                <SocialLink key={link.enTitle} link={link} />
              ))}
            </div>
          </div>
        </div>

        {/* webeto section */}
        <div className="mx-auto mt-7 flex w-full max-w-[600px] flex-col items-center justify-between gap-4 rounded-3xl bg-background-default px-10 py-5 lg:flex-row xl:rounded-b-none">
          <p>
            پیاده‌سازی توسط <span className="font-bold text-primary-main">وبتو</span>
          </p>

          <LinkComponent href={'webeto.com'} className="flex items-center gap-2">
            <p>
              <span className="font-semibold text-primary-main">WEBETO</span>.co
            </p>
            <span className="flex size-9 items-center justify-center rounded-full bg-primary-main text-common-white">
              <TbWorld className="size-7" />
            </span>
          </LinkComponent>
        </div>
      </Container>
      <MobileBottomBar />
    </footer>
  );
}
