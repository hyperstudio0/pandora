import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useResponsive } from 'src/hooks/use-responsive';
import {ListItem} from "@mui/material";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const footerNav = [
  { title: '이용약관', path: '#' },
  { title: '개인정보취급방침', path: '#' },
  { title: '고객센터', path: '#' },
];
export default function Footer() {
  const mdUp = useResponsive('up', 'md');

  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      {/*<Stack*/}
      {/*  component="nav"*/}
      {/*  direction="row"*/}
      {/*  alignItems='center'*/}
      {/*  spacing={mdUp?4:1}*/}
      {/*  sx={{*/}
      {/*    maxWidth:{xs:400,md:520},*/}
      {/*    height: 1,*/}
      {/*    margin:'0 auto'*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {footerNav.map((link,index) => (*/}
      {/*    <>*/}
      {/*      <ListItem sx={{justifyContent:'center',fontSize:{xs:13,md:18}, fontWeight:'600',p:0}}>{link.title}</ListItem>*/}
      {/*      {index !== footerNav.length - 1 && (*/}
      {/*        <Divider orientation="vertical" sx={{ height: 16,  borderColor:'black' }} />*/}
      {/*      )}*/}
      {/*    </>*/}
      {/*  ))}*/}
      {/*</Stack>*/}
      {/*<Typography variant={mdUp?'subtitle1':'body2'} sx={{pt:{xs:4,md:5},pb:3, fontWeight:600}}>*/}
      {/*  (주)오잘골프 | 대표: 유승호 | 주소: 경기도 파주시 경의로 1114. 에펠타워 4층*/}
      {/*  <br/>*/}
      {/*  사업자등록: 804-87-01756 | 통신판매업신고: 2021-서울영등포-0465호*/}
      {/*  <br/>*/}
      {/*  대표메일: info@ozal.com | 골프장 제휴문의: partner@ozal.com*/}
      {/*</Typography>*/}
      {/*<Typography variant={mdUp?'subtitle1':'body2'} component="div" sx={{ color: 'text.secondary' }}>*/}
      {/*  ©OZAL, Inc All Roght Reserved*/}
      {/*</Typography>*/}
    </Container>
  );


  return <footer>{simpleFooter}</footer>;
}

