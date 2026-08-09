import LoginPage from '@/sections/login';
import { Container, Typography } from '@mui/material';

export default function Page() {
  return (
    <div className="h-full overflow-hidden bg-background-default">
      {/* header */}
      <div className="w-full bg-primary-main">
        <Container maxWidth="xxl" className="w-full py-9">
          <Typography className="text-common-white" variant="h1">
            ورود و عضویت
          </Typography>
        </Container>
      </div>

      {/* form section */}
      <div className="my-16 flex justify-center">
        <LoginPage />
      </div>
    </div>
  );
}
