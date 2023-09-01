'use client';

import { Box, IconButton } from '@mui/material';
import Iconify from '../../../components/iconify';
import Logo from '../../../components/logo';
import { useRouter } from '../../../routes/hooks';
import { paths } from '../../../routes/paths';

export default function HomeView() {
  const router = useRouter();

  const goToMainPage = () => {
    router.push(paths.main);
  };

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          backgroundImage: `url('/assets/images/sample/sample01.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          overflow: 'hidden',
        }}
      />
      <IconButton
        sx={{
          width: 92,
          height: 92,
          position: 'fixed',
          bottom: 63,
          right: 28,
          backgroundColor: 'secondary.main',
          flexDirection: 'column',
          '&:hover': {
            backgroundColor: 'secondary.light',
          },
        }}
        onClick={goToMainPage}
      >
        <Iconify icon="ph:cube" width={36} sx={{ color: 'white' }} />
        <Logo sx={{ width: 60, height: 16, mt: 0.5 }} />
      </IconButton>
    </>
  );
}
