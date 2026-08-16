import { Badge, IconButton, Popover} from '@mui/material';
import { useState } from 'react';
import { GoBell } from 'react-icons/go';

export default function NotificationButton() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <IconButton
        aria-describedby={id}
        size="small"
        className="flex-shrink-0"
        onClick={handleClick}
      >
        <Badge
          variant="dot"
          color="error"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <GoBell className="size-6 transition-colors duration-200 hover:text-primary-main" />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="flex flex-col gap-4 p-6">
          <span className="text-sm leading-none text-text-disabled">اعلانی وجود ندارد</span>
        </div>
      </Popover>
    </div>
  );
}
