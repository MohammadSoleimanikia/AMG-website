import LinkComponent from '@/components/linkComponent';
import { Button } from '@mui/material';
import { BsCart3 } from 'react-icons/bs';

type CartButtonProps = {
  count?: number;
};

export default function CartButton({ count = 0 }: CartButtonProps) {
  return (
    <Button
      component={LinkComponent}
      href="/cart"
      variant="contained"
      color="primary"
      className="group flex h-10 flex-shrink-0 items-center gap-2 !rounded-xl px-3 shadow-primary transition-colors duration-200 hover:bg-primary-light hover:text-primary-main"
    >
      <span className="flex size-5 items-center justify-center rounded-full bg-custom-4 text-xs text-common-white transition-colors duration-200 group-hover:bg-primary-main">
        {count}
      </span>
      <BsCart3  className="size-5" />
    </Button>
  );
}
