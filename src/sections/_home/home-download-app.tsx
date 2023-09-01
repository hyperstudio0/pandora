import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {alpha, styled} from '@mui/material/styles';
import Stack, {StackProps} from '@mui/material/Stack';
import Button, {buttonClasses} from '@mui/material/Button';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Logo from "../../components/logo";
import {useResponsive} from "../../hooks/use-responsive";

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

// ----------------------------------------------------------------------

export default function HomeDownloadApp() {
  const mdUp = useResponsive('up', 'md');
    return (
        <Box
            sx={{
                pt: {xs:16,md:20},
                pb: {xs:8,md:20},
                overflow: 'hidden',
                bgcolor: 'primary.main',
            }}
        >
            <Container>
                <Stack
                    direction={{xs: 'column', md: 'row'}}
                    alignItems={{xs: 'center', md: 'unset'}}
                    justifyContent={{md: 'space-between'}}
                >
                    <Stack
                        alignItems={{xs: 'center', md: 'unset'}}
                        sx={{
                            maxWidth: {xs: 360, md: 700},
                            pt: {xs: 0, md: 8},
                            textAlign: {xs: 'center', md: 'unset'},
                        }}
                    >
                        <Typography variant="h2" sx={{fontWeight: 200}}> 원하는 해외골프장 찾을 땐 </Typography>

                        <Logo sx={{
                            width: {xs: 200, md: 420},
                            mt: {xs: 1, md: 2},
                            mb: {xs: 3, md: 4},
                        }}/>

                      {mdUp && (
                        <AppStoreButton/>
                      )}

                    </Stack>

                    <Image
                        disabledEffect
                        alt="mobile app"
                        src="/assets/images/home/home-cover-img.png"
                        sx={{
                            maxWidth: 480,
                        }}
                    />
                  {!mdUp && (
                    <AppStoreButton/>
                  )}
                </Stack>
            </Container>
        </Box>
    );
}

// ----------------------------------------------------------------------

function AppStoreButton({...other}: StackProps) {
  const mdUp = useResponsive('up', 'md');
    return (
        <Stack direction="row" flexWrap={mdUp?"wrap":"nowrap"} spacing={2} {...other}>
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
