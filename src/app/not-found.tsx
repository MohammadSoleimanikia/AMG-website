import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex !h-full w-full flex-col items-center justify-center gap-5 !bg-common-white px-5 py-10 xl:min-h-[calc(100vh-176px)]">
      <Image
        src="/images/not-found.webp"
        alt="not found pic"
        width={600}
        height={450}
        className="h-auto w-full max-w-[650px] object-contain"
      />
      
      <Typography variant="body1">
        صفحه مورد نظر یافت نشد
      </Typography>

      <Button component={Link} href="/" variant="contained">
        بازگشت به خانه
      </Button>
    </div>
  );
}