
import Button, {buttonClasses} from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {alpha, styled, useTheme} from '@mui/material/styles';

import Iconify from 'src/components/iconify';

import Stack, {StackProps} from "@mui/material/Stack";
import Logo from "../../components/logo/logo";
import {useResponsive} from "../../hooks/use-responsive";
import Image from "../../components/image";

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const StyledButton = styled(Button)(({theme}) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));
export default function HomeForDesigner() {
  const mdUp = useResponsive('up', 'md');
  return (
    <Stack
      alignItems='center'
      bgcolor='primary.main'
      sx={{
        py:{xs:6,md:14},
      }}
    >
      <Stack
        alignItems={{xs: 'center', md: 'unset'}}
        sx={{
          maxWidth: {xs: 360, md: 700},
          textAlign: {xs: 'center', md: 'unset'},
        }}
      >
        <Typography variant={mdUp?'h2':'h3'} sx={{fontWeight: 200, textAlign:'center'}}>해외 골프장의 예약부터 <br/> 결제까지 오잘 하나로 끝!</Typography>

        <Image
          disabledEffect
          alt="mobile app"
          src="/assets/images/home/home_image09.png"
          width={mdUp?200:140}
          sx={{
            margin:'0 auto',
            py:{xs:3,md:4}
          }}
        />

        {mdUp && (
          <AppStoreButton/>
        )}

      </Stack>

      {!mdUp && (
        <AppStoreButton/>
      )}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function AppStoreButton({...other}: StackProps) {
  const mdUp = useResponsive('up', 'md');
  return (
    <Stack direction="row" justifyContent='center' flexWrap={mdUp?"wrap":"nowrap"} spacing={2} {...other}>
      <StyledButton startIcon={<Iconify icon="logos:google-play-icon" width={32}/>} sx={{width:{xs:'48%',md:'200px'}}}>
        <Stack alignItems="flex-start">
          <Typography variant='caption' sx={{opacity: 0.72, fontSize:{xs:'10px',md:'12px'}}}>
            GET IT ON
          </Typography>

          <Typography variant="h6" sx={{mt: -0.5}}>
            Google Play
          </Typography>
        </Stack>
      </StyledButton>

      <StyledButton startIcon={<Iconify icon="ri:apple-fill" width={36}/>} sx={{width:{xs:'48%',md:'200px'}}}>
        <Stack alignItems="flex-start">
          <Typography variant='caption' sx={{opacity: 0.72, fontSize:{xs:'10px',md:'12px'}}}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{mt: -0.5}}>
            App Store
          </Typography>
        </Stack>
      </StyledButton>
    </Stack>

  );
}
