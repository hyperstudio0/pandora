'use client';

//  mui
import {
  Box,
  Button,
  Card,
  IconButton,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
// component
import Image from 'src/components/image';

import Iconify from '../../../components/iconify';
import CompleteCard from '../CompleteCard';
import TextMaxLine from '../../../components/text-max-line';

// ----------------------------------------------------------------------

const sampleData = {
  label: 'SuperRare',
  thumbnail: '/assets/images/sample/image04.svg',
  title: 'Pixel Mecha #7560',
}

export default function CompleteView() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url('/assets/images/sample/sample02.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          height: `calc(100vh - 100px)`,
          width: `calc(100% - 200px)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(0deg, rgba(230, 219, 254, 0.10) 0%, rgba(230, 219, 254, 0.10) 100%), radial-gradient(127.45% 141.42% at 0% 0%, rgba(230, 219, 254, 0.20) 0%, rgba(101, 87, 106, 0.00) 100%)`,
          backdropFilter: 'blur(40px)',
          borderRadius: '16px',
          border: '1px solid rgba(230, 219, 254, 0.20)',
        }}
      >
        <Box sx={{ width: 1, height: 1, display: 'flex' }}>
          {/* 왼쪽 메뉴 영역 */}
          <Box
            sx={{
              width: 220,
              borderRight: '1px solid rgba(230, 219, 254, 0.20)',
              py: 3,
              px: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Image
                alt="로고"
                src="/assets/logo/Logo.svg"
                sx={{ width: 92, height: 24, margin: '0 auto', mb: 3 }}
              />
              {/* 메뉴 */}
              <Stack>
                <MenuItem sx={{ height: 42 }}>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    NFT
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    height: 42,
                    backgroundColor: 'rgba(34, 197, 94, 0.08)',
                  }}
                >
                  <Iconify
                    icon="ph:cube"
                    width={24}
                    sx={{ color: 'success.main', mr: 2 }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'success.main' }}
                  >
                    Combine NFTs
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ height: 42 }}>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    LEARN
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    height: 42,
                  }}
                >
                  <Iconify
                    icon="ic:outline-info"
                    width={24}
                    sx={{ color: 'text.disabled', mr: 2 }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'text.disabled' }}
                  >
                    Guide
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    height: 42,
                  }}
                >
                  <Iconify
                    icon="mingcute:calendar-day-line"
                    width={24}
                    sx={{ color: 'text.disabled', mr: 2 }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'text.disabled' }}
                  >
                    FAQ
                  </Typography>
                </MenuItem>
              </Stack>
            </Box>

            <Button variant="outlined" color="primary" fullWidth>
              Back to Game
            </Button>
          </Box>

          {/* 메인  영역 */}
          <Box sx={{ width: 'calc(100% - 220px)' }}>
            {/* 상단 헤더 */}
            <Box
              sx={{
                height: 96,
                borderBottom: '1px solid rgba(230, 219, 254, 0.20)',
                p: 2.5,
              }}
            >
              <Typography variant="h5" sx={{ color: 'white', mb: 0.5 }}>
                Combine NFTs
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                Select your owned items to acquire new NFT items! 💥
              </Typography>
            </Box>

            <Stack
              spacing={3}
              alignItems="center"
              justifyContent="center"
              sx={{
                height: 'calc(100% - 96px)',
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: theme.palette.success.main }}
              >
                The Combination was Successful!
              </Typography>

              {/* 결합 된 카드 */}
              <CompleteCard data={sampleData} />

              <Box>
                <TextMaxLine
                  variant="h3"
                  line={1}
                  sx={{ my: 1, color: 'white', textAlign:'center' }}
                >
                  {sampleData.title}
                </TextMaxLine>

                <Typography variant="body1" sx={{ color: 'text.disabled' ,textAlign:'center'}}>
                  {sampleData.label}
                </Typography>
              </Box>

              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'rgba(145, 158, 171, 0.08)',
                }}
              >
                <Iconify
                  icon="material-symbols:close"
                  sx={{ width: 24, height: 24 }}
                />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
