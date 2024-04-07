import {Avatar, Box, Card, Divider, Stack, Typography} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import React, {useState} from 'react';
import Carousel from 'react-slick';
import CustomListItem from './CustomListItem';
import {_mock} from '../../_mock';
import {useCarousel} from '../../components/carousel';
import Label from '../../components/label';
import {useMainPageContext} from "../../app/main/MainPageProvider";

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
    const {selectTokens, totalWeight} = useMainPageContext();

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

    const level = () => {

        if (totalWeight <= 0) {
            return <Typography variant="h6" sx={{mx: 0.5}}>
                -
            </Typography>
        } else if(totalWeight > 0 && totalWeight <= 5) {
            return <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Label variant="filled" color="default">
                    Normal
                </Label>
            </Box>;
        }  else if(totalWeight > 5 && totalWeight <= 10) {
            return <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Label variant="filled" color="default">
                    Normal
                </Label>
                <Typography variant="h6" sx={{mx: 0.5}}>
                    ~
                </Typography>
                <Label variant="filled" color="info">
                    SuperRare
                </Label>
            </Box>;
        } else if(totalWeight > 10 && totalWeight <= 20) {
            return <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Label variant="filled" color="info">
                    SuperRare
                </Label>
                <Typography variant="h6" sx={{mx: 0.5}}>
                    ~
                </Typography>
                <Label variant="filled" color="warning">
                    Hero
                </Label>
            </Box>;
        } else if(totalWeight > 21 && totalWeight <= 10000) {
            return <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Label variant="filled" color="warning">
                    Hero
                </Label>
                <Typography variant="h6" sx={{mx: 0.5}}>
                    ~
                </Typography>
                <Label variant="filled" color="error">
                    Legendary
                </Label>
            </Box>;
        }
    }

    const calculatePercentage = (level: 'common' | 'rare' | 'superrare' | 'hero' | 'legendary', totalWeight: number): string => {
        // 기본 가중치 설정, 여기서는 totalWeight에 따라 각 레벨의 확률이 어떻게 변할지 결정합니다.
        const weightFactors = {
            common: 300, // Common 레벨의 기본 가중치
            rare: 150, // Rare 레벨의 기본 가중치
            superrare: 75, // SuperRare 레벨의 기본 가중치
            hero: 30, // Hero 레벨의 기본 가중치
            legendary: 20 // Legendary 레벨의 기본 가중치
        };

        // totalWeight가 커질수록 낮은 레벨의 확률은 감소하고, 높은 레벨의 확률은 증가하는 로직
        const baseTotal = Object.values(weightFactors).reduce((acc, value) => acc + value, 0);
        const levelWeight = weightFactors[level];
        let percentage = (levelWeight / (baseTotal + totalWeight)) * 100;

        // 확률이 100%를 초과하지 않도록 조정
        percentage = Math.min(100, percentage);

        return `${percentage.toFixed(2)}%`;
    };


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
                    <Typography variant="body1" sx={{mb: 1}}>
                        Selected NFTs
                    </Typography>
                    {/* 선택하지 않았을 때 */}
                    {!selectTokens || selectTokens.length === 0 ? (
                        <Typography variant="h6">-</Typography>
                    ) : (
                        // 선택했을 때
                        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                            {selectTokens.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        px: {xs: '6px', md: '8px'},
                                    }}
                                >
                                    <Avatar
                                        variant="rounded"
                                        alt={item.label}
                                        src={item.thumbnail}
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
                    <Divider sx={{borderColor: '#919EAB33'}}/>
                </Stack>

                <Stack>
                    <Typography variant="body1" sx={{mb: 1}}>
                        Estimated Values
                    </Typography>
                    {!isSelect ? (
                        <Typography variant="h6">-</Typography>
                    ) : (
                        <Typography variant="h6">{totalWeight} XPLA</Typography>
                    )}
                </Stack>

                <Stack>
                    <Divider sx={{borderColor: '#919EAB33'}}/>
                </Stack>

                {/*<Stack>*/}
                {/*    <Typography variant="body1" sx={{mb: 1}}>*/}
                {/*        Estimated Rarerity*/}
                {/*    </Typography>*/}
                {/*    {level()}*/}
                {/*</Stack>*/}


                <Stack>
                    <Typography variant="body1" sx={{mb: 1}}>
                        Estimated Acquisition Probability
                    </Typography>
                    {selectTokens && selectTokens.length !== 0 && <Box>
                        <CustomListItem
                            label={<Label variant="filled" color="default">
                                Common
                            </Label>}
                            value={!isSelect ? '-' : calculatePercentage('common', totalWeight)}
                            isFlex
                        />
                        <CustomListItem
                            label={<Label variant="filled" color="secondary">
                                Rare
                            </Label>}
                            value={!isSelect ? '-' : calculatePercentage('rare', totalWeight)}
                            isFlex
                        />
                        <CustomListItem
                            label={<Label variant="filled" color="info">
                                SuperRare
                            </Label>}
                            value={!isSelect ? '-' : calculatePercentage('superrare', totalWeight)}
                            isFlex
                        />
                        <CustomListItem
                            label={<Label variant="filled" color="warning">
                                Hero
                            </Label>}
                            value={!isSelect ? '-' : calculatePercentage('hero', totalWeight)}
                            isFlex
                        />
                        <CustomListItem
                            label={<Label variant="filled" color="error">
                                Legendary
                            </Label>}
                            value={!isSelect ? '-' : calculatePercentage('legendary', totalWeight)}
                            isFlex
                        />
                    </Box>}
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
