import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';
import {useResponsive} from "../../hooks/use-responsive";
import {Divider} from "@mui/material";
import Button from "@mui/material/Button";
import Iconify from "../../components/iconify";
import {paths} from "../../routes/paths";

// ----------------------------------------------------------------------

export default function HomeNewStart() {
  const mdUp = useResponsive('up', 'md');
  return (
    <Container
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 10, md: 10 },
      }}
    >
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', }}>
        <Typography sx={{fontSize:mdUp?'32px':'22px'}}>💛 애정이 가는 골프앱, 오잘</Typography>
        <Typography sx={{fontSize:mdUp?'32px':'22px'}}>✈️ 여정까지 함께하는 골프앱, 오잘</Typography>
        <Typography sx={{fontSize:mdUp?'32px':'22px'}}>👬 우정이 돈독해지는 골프앱, 오잘</Typography>
        <Typography sx={{fontSize:mdUp?'32px':'22px'}}>👀 엣지가 느껴지는 골프앱, 오잘</Typography>
        <Typography sx={{fontSize:mdUp?'32px':'22px'}}>👍 엄지가 절로 세워지는 골프앱, 오잘</Typography>
        <Typography sx={{fontSize:mdUp?'32px':'22px'}}>🔥 열정을 불태우는 골프앱, 오잘</Typography>

        <Divider sx={{width:'100%', maxWidth:'600px', mt:{xs:6,md:6},mb:{xs:3,md:6},borderColor:(theme)=>theme.palette.divider}}/>

        <Typography sx={{fontSize:mdUp?'40px':'24px', fontWeight:"600", textAlign:'center'}}>OB부터 Z세대까지 인정하는 <br/>😎 요즘 골프앱, 오잘🏌️‍♂️️</Typography>
      </Box>
      <Box
        sx={{
          position:'relative',
          height:{xs:'120px',md:'200px'},
          borderRadius:'20px',
          bgcolor:(theme)=>theme.palette.grey[700],
          px:{xs:4,md:8},
          mt:{xs:8,md:16}
        }}
      >
          <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                height:1
            }}
          >
              <Typography variant={mdUp?'h3':'h6'} sx={{color:'white', fontWeight:800}}>
                  오잘골프가 당신의 <br/> 비즈니스를 기다립니다.
              </Typography>
              <Button variant="text" sx={{ color:'white',p:0,width:'fit-content' }}>
                  <Typography variant={mdUp?'h5':'subtitle2'} sx={{color:'white',textAlign:'left',fontWeight: {xs:800,md:600}}}>
                      제휴 문의
                  </Typography>
                  <Iconify icon='mingcute:right-fill' width={mdUp?24:16}/>
              </Button>
          </Box>
          <Box
            sx={{
                position:'absolute',
                bottom:0,
                right:{xs:0,md:50},
                display:{xs:'none',md:'inherit'}
            }}
          >
              <Image
                  alt="image"
                  src="/assets/images/home/home_image10.png"
              />

          </Box>

      </Box>
    </Container>
  );
}
