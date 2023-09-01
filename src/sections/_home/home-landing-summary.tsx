import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import {fShortenNumber} from 'src/utils/format-number';

// ----------------------------------------------------------------------

const SUMMARY = [
    {
      description: '골프장검색',
      icon: '/assets/images/home/home_icon01.png',
    },
    {
      description: '간편결제',
      icon: '/assets/images/home/home_icon02.png',
    },
    {
      description: '실시간예약',
      icon: '/assets/images/home/home_icon03.png',
    },
    {
      description: '숙박/픽업서비스',
      icon: '/assets/images/home/home_icon04.png',
    },
];

// ----------------------------------------------------------------------

export default function HomeLandingSummary() {
    return (
        <Container
            sx={{
                textAlign: 'center',
                py: {xs: 5, md: 12},
            }}
        >
            <Stack
                spacing={3}
                sx={{
                    mx: 'auto',
                    maxWidth: 500,
                    mb: {xs: 8, md: 10},
                }}
            >
                <Typography variant="h3">여기저기 돌아다니지 말고<br/>이제 &lt;오잘&gt; 하나로 끝!</Typography>

            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gap: {xs: 0, md: 3},
                    rowGap: {xs:6,md:0},
                    gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    },
                    maxWidth:{
                        xs:'500px',
                        md:'100%'
                    },
                    margin:{
                        xs:'0 auto',
                        md:'auto'
                    }
                }}
            >
                {SUMMARY.map((value) => (
                    <Stack key={value.description} spacing={1}>
                      <Box sx={{}}>
                        <Image
                          alt={value.icon}
                          src={value.icon}
                          sx={{
                            mb: 3, width: {xs:120,sm:180,md:220}, height:  {xs:120,sm:180,md:220}, mx: 'auto',
                            p:{xs:3,sm:3,md:5},
                            border: (theme) => ({
                              xs: `8px solid ${theme.palette.primary.main}`,
                              sm: `12px solid ${theme.palette.primary.main}`,
                              md: `16px solid ${theme.palette.primary.main}`,
                            }),
                            borderRadius:'50%'
                          }}
                        />

                      </Box>
                        <Typography variant="h5" sx={{fontWeight:'normal'}}> {value.description} </Typography>
                    </Stack>
                ))}
            </Box>
        </Container>
    );
}
