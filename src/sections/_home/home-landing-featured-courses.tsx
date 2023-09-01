import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import {useTheme} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import {ICourseProps} from 'src/types/course';
import {useResponsive} from 'src/hooks/use-responsive';
import Carousel, {useCarousel, CarouselArrows, CarouselDots} from 'src/components/carousel';

import HomeCourseItem from './home-course-item';
import {IHomeSlide} from "../../types/home";

// ----------------------------------------------------------------------

type Props = {
    courses: ICourseProps[];
    homeSlides: IHomeSlide[];
};

export default function HomeLandingFeaturedCourses({courses, homeSlides}: Props) {
    const theme = useTheme();

    const carousel = useCarousel({
        // autoplay: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: theme.breakpoints.values.lg,
                settings: {slidesToShow: 2},
            },
            {
                breakpoint: theme.breakpoints.values.md,
                settings: {slidesToShow: 1},
            },
        ],
        ...CarouselDots({
            rounded: true,
            sx: { mt: {xs:3,md:6} },
        }),
    });

    const mdUp = useResponsive('up', 'md');

    return (
        <Container
            maxWidth={false}
            sx={{
                overflow: 'hidden',
                pt: {xs: 8, md: 10},
                bgcolor: 'background.neutral',
            }}
        >
            <Stack
                direction={{xs: 'column', md: 'row'}}
                alignItems={{md: 'flex-end'}}
                sx={{
                    textAlign: {xs: 'center', md: 'center'},
                }}
            >
                <Stack spacing={3} flexGrow={1}>
                    <Typography variant="h3">경치도 오잘! 시설도 오잘! 잔디도 오잘!</Typography>
                    <Typography variant="h5" sx={{fontWeight:'normal'}}>
                        대만과 베트남의 매력적인 골프장을 한 곳에서!
                    </Typography>
                </Stack>

            </Stack>

            <Box
                sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    mx: {xs:-2,md: -3},
                    // width: {md: 'calc(100% + 32px)'},
                    pt: 8,
                    pb: {xs:4,md:10},
                    bgcolor: 'background.neutral',
                }}
            >
                <CarouselArrows
                    filled shape="rounded"
                    onNext={carousel.onNext}
                    onPrev={carousel.onPrev}
                    leftButtonProps={{
                        sx: {
                            display: 'none',
                            left: -16,
                            opacity: 1,
                            color: 'common.white',
                            bgcolor: 'primary.main',

                            '&:hover': {bgcolor: 'primary.dark'},
                            ...(mdUp && {display: 'none'}),
                        },
                    }}
                    rightButtonProps={{
                        sx: {
                            display: 'none',
                            right: -16,
                            opacity: 1,
                            color: 'common.white',
                            bgcolor: 'primary.main',
                            '&:hover': {bgcolor: 'primary.dark'},
                            ...(mdUp && {display: 'none'}),
                        },
                    }}
                >
                    <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings} >
                        {homeSlides.map((homeSlide) => (
                            <Box
                                key={`${homeSlide.id}`}
                                sx={{
                                    px: {xs: 1, md: 6}
                                    // pt: {xs: 8, md: 10},
                                    // pb: {xs: 10, md: 3},
                                }}
                            >
                                <HomeCourseItem homeSlide={homeSlide} vertical/>
                            </Box>
                        ))}
                    </Carousel>
                </CarouselArrows>
                {/*{mdUp && <Stack*/}
                {/*    direction="row"*/}
                {/*    justifyContent="center"*/}
                {/*    alignItems="center"*/}
                {/*    spacing={2}*/}
                {/*>*/}
                {/*    <CarouselArrows spacing={2} onNext={carousel.onNext} onPrev={carousel.onPrev}/>*/}
                {/*</Stack>}*/}
            </Box>

        </Container>
    );
}
