import { Avatar, Box, Card, Divider, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { useState } from 'react';
import Carousel from 'react-slick';
import CustomListItem from './CustomListItem';
import { _mock } from '../../_mock';
import { useCarousel } from '../../components/carousel';
import Label from '../../components/label';

// ----------------------------------------------------------------------
interface CombineCardProps {
  loading: boolean;
  handleCombine: () => void;
}
// ----------------------------------------------------------------------
export default function CombineCard({
  loading,
  handleCombine,
}: CombineCardProps) {
  // 선택된 아이템의 유무
  const [isSelect, setIsSelect] = useState(true);

  // 선택된 아이템 슬라이드
  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 3,
    swipeToSlide: true,
  });
  const data = [...Array(5)].map((_, index) => ({
    id: _mock.id(index),
    src: '/assets/images/sample/image05.svg',
  }));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        m: 1.5,
        p: 2,
        color: '#FFFFFF7A',
        background: 'rgba(0, 0, 0, 0.08)',
        borderRadius: 1,
        border: `1px solid rgba(145, 158, 171, 0.20)`,
        height: 'calc(100% - 24px)',
      }}
    >
      <Stack spacing={2}>
        <Stack>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Selected NFTs
          </Typography>
          {/* 선택하지 않았을 때 */}
          {!isSelect ? (
            <Typography variant="h6">-</Typography>
          ) : (
            // 선택했을 때
            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {data.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    px: { xs: '6px', md: '8px' },
                  }}
                >
                  <Avatar
                    variant="rounded"
                    alt="아이템이미지"
                    src={item.src}
                    sx={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          )}
        </Stack>

        <Stack>
          <Divider sx={{ borderColor: '#919EAB33' }} />
        </Stack>

        <Stack>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Estimated Values
          </Typography>
          {!isSelect ? (
            <Typography variant="h6">-</Typography>
          ) : (
            <Typography variant="h6">23 OAS</Typography>
          )}
        </Stack>

        <Stack>
          <Divider sx={{ borderColor: '#919EAB33' }} />
        </Stack>

        <Stack>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Estimated Rarerity
          </Typography>
          {!isSelect ? (
            <Typography variant="h6">-</Typography>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Label variant="filled" color="info">
                Superrare
              </Label>
              <Typography variant="h6" sx={{ mx: 0.5 }}>
                ~
              </Typography>
              <Label variant="filled" color="warning">
                Hero
              </Label>
            </Box>
          )}
        </Stack>

        <Stack>
          <Divider sx={{ borderColor: '#919EAB33' }} />
        </Stack>

        <Stack>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Estimated Acquisition Probability
          </Typography>
          <Box>
            <CustomListItem
              label="Common"
              value={!isSelect ? '-' : '75%'}
              isFlex
            />
            <CustomListItem
              label="Rare"
              value={!isSelect ? '-' : '45%'}
              isFlex
            />
            <CustomListItem
              label="SuperRare"
              value={!isSelect ? '-' : '20%'}
              isFlex
            />
            <CustomListItem
              label="Hero"
              value={!isSelect ? '-' : '10%'}
              isFlex
            />
            <CustomListItem
              label="Legendary"
              value={!isSelect ? '-' : '5%'}
              isFlex
            />
          </Box>
        </Stack>
      </Stack>
      <Box>
        <LoadingButton
          fullWidth
          variant="contained"
          color="primary"
          loading={loading}
          onClick={handleCombine}
        >
          Combine NFTs
        </LoadingButton>
      </Box>
    </Card>
  );
}
