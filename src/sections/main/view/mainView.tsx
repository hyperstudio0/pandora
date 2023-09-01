'use client';

// react
import React, { useEffect, useState } from 'react';
//  mui
import {
  Box,
  Button,
  Card,
  CircularProgress,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

// component
import Image from 'src/components/image';
import Iconify from '../../../components/iconify';
import CardList from '../CardList';
import CombineCard from '../CombineCard';
import { paths } from '../../../routes/paths';
import { useRouter } from '../../../routes/hooks';

// ----------------------------------------------------------------------
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// ----------------------------------------------------------------------

const sampleData01 = [
  {
    id: 1,
    label: 'SuperRare',
    thumbnail: '/assets/images/sample/image01.svg',
    title: 'MCH Extension- #30970194 Lv.80',
    gameName: 'MyCryptoHeroes',
    gameLogo: '/assets/icons/sample/sample09.svg',
  },
  {
    id: 2,
    label: 'Legendary',
    thumbnail: '/assets/images/sample/image02.svg',
    title: 'MCH Extension: #21410021 Lv.70',
    gameName: 'MyCryptoHeroes',
    gameLogo: '/assets/icons/sample/sample09.svg',
  },
  {
    id: 3,
    label: 'Hero',
    thumbnail: '/assets/images/sample/image03.svg',
    title: 'MCH Extension: #21360087 Lv.70',
    gameName: 'MyCryptoHeroes',
    gameLogo: '/assets/icons/sample/sample09.svg',
  },
  {
    id: 4,
    label: 'Hero',
    thumbnail: '/assets/images/sample/image04.svg',
    title: 'MCH Extension: #21360087 Lv.70',
    gameName: 'MyCryptoHeroes',
    gameLogo: '/assets/icons/sample/sample09.svg',
  },
];

const sampleData02 = null;

const sampleData03 = null;

const sampleData04 = [
  {
    id: 1,
    label: 'SuperRare',
    thumbnail: '/assets/images/sample/image05.svg',
    title: 'Pixel Mecha #7560',
    gameName: 'PixelBattle',
    gameLogo: '/assets/icons/sample/sample04.svg',
  },
  {
    id: 2,
    label: 'Legendary',
    thumbnail: '/assets/images/sample/image06.svg',
    title: 'Pixel Mecha #9844',
    gameName: 'PixelBattle',
    gameLogo: '/assets/icons/sample/sample04.svg',
  },
  {
    id: 3,
    label: 'Hero',
    thumbnail: '/assets/images/sample/image07.svg',
    title: 'Pixel Mecha #9524',
    gameName: 'PixelBattle',
    gameLogo: '/assets/icons/sample/sample04.svg',
  },
  {
    id: 4,
    label: 'Common',
    thumbnail: '/assets/images/sample/image08.svg',
    title: 'Pixel Mecha #7560',
    gameName: 'PixelBattle',
    gameLogo: '/assets/icons/sample/sample04.svg',
  },
  {
    id: 5,
    label: 'Rare',
    thumbnail: '/assets/images/sample/image09.svg',
    title: 'Pixel Mecha #4234',
    gameName: 'PixelBattle',
    gameLogo: '/assets/icons/sample/sample04.svg',
  },
];

// ----------------------------------------------------------------------

export default function MainView() {
  const router = useRouter();

  // fake loading page
  const [isLoading, setIsLoading] = useState(true);

  // todo: fake 로딩 페이지 시간 수정 필요
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      // 컴포넌트 언마운트 시 타이머 클리어
      clearTimeout(timer);
    };
  }, []);

  // tab 관련
  const [value, setValue] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    // Tab이 변경될 때 이미지 경로 업데이트
    switch (newValue) {
      case 0:
        setTabIndex(0);
        break;
      case 1:
        setTabIndex(1);
        break;
      case 2:
        setTabIndex(2);
        break;
      case 3:
        setTabIndex(3);
        break;
      default:
        break;
    }
  };

  //  카드 결합 로딩

  const [isCombineLoading, setIsCombineLoading] = useState(false);

  // 아이템 결합 하기
  const handleCombine = async () => {
    setIsCombineLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      router.push(paths.complete);
    } catch (error) {
      console.error(error);
    } finally {
      setIsCombineLoading(false);
    }
  };

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
        {isLoading ? (
          <>
            <Image alt="로고" src="/assets/logo/Logo.svg" />
            <CircularProgress
              color="primary"
              sx={{ position: 'absolute', bottom: 60 }}
            />
          </>
        ) : (
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
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.disabled' }}
                    >
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
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.disabled' }}
                    >
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

              <Box
                sx={{
                  height: 'calc(100% - 96px)',
                  display: 'flex',
                }}
              >
                <Box
                  sx={{
                    width: 'calc(100% - 256px)',
                    borderRight: '1px solid rgba(230, 219, 254, 0.20)',
                    p: 2.5,
                  }}
                >
                  <Box>
                    {/* 탭 메뉴 */}
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      textColor="primary"
                      indicatorColor="primary"
                      sx={{
                        '& .MuiTabs-indicator': {
                          backgroundColor: '#00A76F !important',
                        },
                      }}
                    >
                      <Tab
                        icon={
                          <Image
                            alt="아이콘"
                            src={
                              tabIndex === 0
                                ? '/assets/icons/sample/sample05.svg'
                                : '/assets/icons/sample/sample01.svg'
                            }
                          />
                        }
                        label="Oasys"
                        {...a11yProps(0)}
                      />
                      <Tab
                        icon={
                          <Image
                            alt="아이콘"
                            src={
                              tabIndex === 1
                                ? '/assets/icons/sample/sample06.svg'
                                : '/assets/icons/sample/sample02.svg'
                            }
                          />
                        }
                        label="XPLA"
                        {...a11yProps(1)}
                      />
                      <Tab
                        icon={
                          <Image
                            alt="아이콘"
                            src={
                              tabIndex === 2
                                ? '/assets/icons/sample/sample07.svg'
                                : '/assets/icons/sample/sample03.svg'
                            }
                          />
                        }
                        label="Ethereum"
                        {...a11yProps(2)}
                      />
                      <Tab
                        icon={
                          <Image
                            alt="아이콘"
                            src={
                              tabIndex === 3
                                ? '/assets/icons/sample/sample08.svg'
                                : '/assets/icons/sample/sample04.svg'
                            }
                          />
                        }
                        label="Polygon"
                        {...a11yProps(3)}
                      />
                    </Tabs>
                  </Box>
                  {/* 탭 1 내용 */}
                  <CustomTabPanel value={value} index={0}>
                    <CardList data={sampleData01} />
                  </CustomTabPanel>

                  {/* 탭 2 내용 */}
                  <CustomTabPanel value={value} index={1}>
                    <CardList data={sampleData02} />
                  </CustomTabPanel>

                  {/* 탭 2 내용 */}
                  <CustomTabPanel value={value} index={2}>
                    <CardList data={sampleData03} />
                  </CustomTabPanel>

                  {/* 탭 2 내용 */}
                  <CustomTabPanel value={value} index={3}>
                    <CardList data={sampleData04} />
                  </CustomTabPanel>
                </Box>

                {/* 오른쪽 결합 카드  */}
                <Box sx={{ width: 256 }}>
                  <CombineCard
                    loading={isCombineLoading}
                    handleCombine={handleCombine}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Card>
    </Box>
  );
}
