import LinkComponent from '@/components/linkComponent';
import { Badge, IconButton } from '@mui/material';
import { GoBell } from 'react-icons/go';

export default function NotificationButton() {
  return (
    <IconButton
      component={LinkComponent}
      href="/notifications"
      size="small"
      className="flex-shrink-0"
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
  );
}
