import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa6';

export default function RegisterButton({className}:{className?:string}) {
  return (
    <Button
      component={Link}
      href="/login"
      size="small"
      className={`flex items-center gap-3 !rounded-2xl bg-background-paper py-3 px-4 text-text-primary  ${className}`}
    >
      <Typography className="font-medium" variant="body2">
        ورود و عضویت
      </Typography>
      <span className="flex size-7 lg:size-9 items-center justify-center rounded-full bg-primary-main text-common-white">
        <FaRegUser className="size-4 shadow-s2" />
      </span>
    </Button>
  );
}
