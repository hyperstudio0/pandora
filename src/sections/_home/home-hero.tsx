import { useRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { HEADER } from 'src/layouts/config-layout';
import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';
import Label from "../../components/label";
import Divider from "@mui/material/Divider";

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Grid container columnSpacing={3}  sx={{ height: 1, py:{xs:6,md:10}, maxWidth:{md:800}, margin:'0 auto'}}>
        <Grid xs={12} md={7}>
          <Stack
            spacing={3}
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              // py: {md:15},
              pt:{md:6},
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Image
                alt="이미지"
                src="/assets/images/home/home_image01.png"
                width={mdUp?120:80}
              />
              <Label color="primary" variant="filled"  sx={{p:2, height:{xs:32,md:40}}}>
                <Typography sx={{color:'text.primary',fontSize:{xs:'16px',md:'24px'}, fontWeight:'600'}}>
                  오잘의 핵심 기능 #1
                </Typography>
              </Label>
            </Box>
            <Typography sx={{fontSize:{xs:'28px',md:'42px'},fontWeight:'800',pb:3}}>
              한눈에 바로 확인하는 <br /> 실시간 예약현황
            </Typography>
          </Stack>
        </Grid>

        <Grid xs={12} md={5}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/home_image05.png"
              sx={{
                height:{xs:500,md:'auto'}
              }}
            />
          </Box>

        </Grid>
      </Grid>
      <Divider sx={{ borderWidth: {xs:8,md:16}, borderColor:'background.neutral' }}/>

      <Grid container columnSpacing={3}  sx={{ height: 1, py:{xs:6,md:10}, maxWidth:{md:800}, margin:'0 auto', flexDirection:{xs:'column-reverse', md:'row'}}}>
        <Grid xs={12} md={5}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/home_image06.png"
              sx={{
                height:{xs:500,md:'auto'}
              }}
            />
          </Box>

        </Grid>
        <Grid xs={12} md={7} sx={{display:'flex', justifyContent:{xs:'center',md:'flex-end'},alignItems:'flex-start',}}>
          <Stack
            spacing={3}
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              pt:{md:6},
              alignItems:{xs:'center',md:'flex-end'},
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Box sx={{display:'flex', flexDirection:'column',alignItems:{md:'flex-end'} }}>
              <Image
                alt="이미지"
                src="/assets/images/home/home_image02.png"
                width={mdUp?120:80}
              />
              <Label color="primary" variant="filled"  sx={{p:2, height:{xs:32,md:40}}}>
                <Typography sx={{color:'text.primary',fontSize:{xs:'16px',md:'24px'}, fontWeight:'600'}}>
                  오잘의 핵심 기능 #2
                </Typography>
              </Label>
            </Box>
            <Typography sx={{fontSize:{xs:'28px',md:'42px'},fontWeight:'800',pb:3}}>
             현지에서 직접 작성한<br /> 생생한 골프장 정보
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ borderWidth: {xs:8,md:16}, borderColor:'background.neutral' }}/>

      <Grid container columnSpacing={3}  sx={{ height: 1, py:{xs:6,md:10}, maxWidth:{md:800}, margin:'0 auto'}}>
        <Grid xs={12} md={7}>
          <Stack
            spacing={3}
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              // py: {md:15},
              pt:{md:6},
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Image
                alt="이미지"
                src="/assets/images/home/home_image03.png"
                width={mdUp?120:80}
              />
              <Label color="primary" variant="filled"  sx={{p:2, height:{xs:32,md:40}}}>
                <Typography sx={{color:'text.primary',fontSize:{xs:'16px',md:'24px'}, fontWeight:'600'}}>
                  오잘의 핵심 기능 #3
                </Typography>
              </Label>
            </Box>
            <Typography sx={{fontSize:{xs:'28px',md:'42px'},fontWeight:'800',pb:3}}>
              쉽고 빠르고 편리한<br /> 간편결제 시스템
            </Typography>
          </Stack>
        </Grid>

        <Grid xs={12} md={5}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/home_image07.png"
              sx={{
                height:{xs:500,md:'auto'}
              }}
            />
          </Box>

        </Grid>
      </Grid>
      <Divider sx={{ borderWidth: {xs:8,md:16}, borderColor:'background.neutral' }}/>

      <Grid container columnSpacing={3}  sx={{ height: 1, py:{xs:6,md:10}, maxWidth:{md:800}, margin:'0 auto', flexDirection:{xs:'column-reverse', md:'row'}}}>
        <Grid xs={12} md={5}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Image
              visibleByDefault
              disabledEffect
              alt="home hero"
              src="/assets/images/home/home_image08.png"
              sx={{
                height:{xs:500,md:'auto'}
              }}
            />
          </Box>

        </Grid>
        <Grid xs={12} md={7} sx={{display:'flex', justifyContent:{xs:'center',md:'flex-end'},alignItems:'flex-start',}}>
          <Stack
            spacing={3}
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{
              pt:{md:6},
              alignItems:{xs:'center',md:'flex-end'},
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Box sx={{display:'flex', flexDirection:'column',alignItems:{md:'flex-end'} }}>
              <Image
                alt="이미지"
                src="/assets/images/home/home_image04.png"
                width={mdUp?110:70}
              />
              <Label color="primary" variant="filled"  sx={{p:2, height:{xs:32,md:40}}}>
                <Typography sx={{color:'text.primary',fontSize:{xs:'16px',md:'24px'}, fontWeight:'600'}}>
                  오잘의 핵심 기능 #4
                </Typography>
              </Label>
            </Box>
            <Typography sx={{fontSize:{xs:'28px',md:'42px'},fontWeight:'800',pb:3}}>
              한 번에 해결가능한<br /> 픽업과 호텔예약
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ borderWidth: {xs:8,md:16}, borderColor:'background.neutral' }}/>

    </Box>
  );
}
