import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Logo from 'src/components/logo';
import { bgBlur } from 'src/theme/css';
import Label from 'src/components/label';
import { paths } from 'src/routes/paths';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { HEADER } from '../config-layout';
import Searchbar from '../common/searchbar';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  return (
    <AppBar>
      {/*<Toolbar*/}
      {/*  disableGutters*/}
      {/*  sx={{*/}
      {/*    height: {*/}
      {/*      xs: HEADER.H_MOBILE,*/}
      {/*      md: HEADER.H_DESKTOP,*/}
      {/*    },*/}
      {/*    transition: theme.transitions.create(['height', 'background-color'], {*/}
      {/*      easing: theme.transitions.easing.easeInOut,*/}
      {/*      duration: theme.transitions.duration.shorter,*/}
      {/*    }),*/}
      {/*    ...(headerOnDark && {*/}
      {/*      color: 'common.white',*/}
      {/*    }),*/}
      {/*    ...(offset && {*/}
      {/*      backgroundColor:theme.palette.primary.main,*/}
      {/*      // ...bgBlur({ color: theme.palette.background.default }),*/}
      {/*      color: 'text.primary',*/}
      {/*      height: {*/}
      {/*        md: HEADER.H_DESKTOP - 16,*/}
      {/*      },*/}
      {/*    }),*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Container*/}
      {/*    sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}*/}
      {/*  >*/}
      {/*    <Box sx={{ lineHeight: 0, position: 'relative' }}>*/}
      {/*      <Logo />*/}
      {/*    </Box>*/}


      {/*    <Stack direction="row" alignItems="center" justifyContent="flex-end">*/}
      {/*      /!*<Stack spacing={1} direction="row" alignItems="center">*!/*/}
      {/*      /!*  <Searchbar />*!/*/}

      {/*      /!*  <SettingsButton />*!/*/}
      {/*      /!*</Stack>*!/*/}
      {/*      <NavDesktop data={navConfig} sx={{pr:{xs:2,md:4}}}/>*/}
      {/*        <Button*/}
      {/*          variant="contained"*/}
      {/*          color="inherit"*/}
      {/*          href="#"*/}
      {/*          rel="noopener"*/}
      {/*          size={mdUp?'medium':'medium'}*/}
      {/*          sx={{width:{sx:'80px',md:'100px'}}}*/}
      {/*        >*/}
      {/*          제휴 문의*/}
      {/*        </Button>*/}

      {/*    </Stack>*/}

      {/*    /!*{!mdUp && <NavMobile data={navConfig} />}*!/*/}
      {/*  </Container>*/}
      {/*</Toolbar>*/}

      {/*{offset && <HeaderShadow />}*/}
    </AppBar>
  );
}
