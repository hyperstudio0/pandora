import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {paths} from 'src/routes/paths';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import {ICourseProps} from 'src/types/course';
import {RouterLink} from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';
import {IHomeSlide} from "../../types/home";
import {useResponsive} from "../../hooks/use-responsive";

// ----------------------------------------------------------------------

type Props = {
    homeSlide: IHomeSlide;
    vertical?: boolean;
};

export default function HomeCourseItem({homeSlide, vertical}: Props) {
  const mdUp = useResponsive('up', 'md');
    const {
        id,
        name,
        image,
        location,
        flagIcon
    } = homeSlide;

    return (
        <Card
            sx={{
                display: {sm: 'flex'},
                '&:hover': {
                    boxShadow: (theme) => theme.customShadows.z24,
                },
                ...(vertical && {
                    flexDirection: 'column',
                }),
                bgcolor: 'primary.main'
            }}
        >
            <Box sx={{flexShrink: {sm: 0}}}>
                <Image
                    alt={`${id}`}
                    src={image}
                    sx={{
                        height: 1,
                        objectFit: 'cover',
                        width: {sm: 240},
                        ...(vertical && {
                            width: 1,
                            height:{xs:'160px',md:'260px'}
                        }),
                    }}
                />
            </Box>

            <Stack spacing={3} sx={{p:{xs:1,md:2}}}>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{color: 'text.disabled', '& > *:not(:last-child)': {mr: 2.5}}}
                >
                    <Stack direction="row" alignItems="center" sx={{typography: 'body2'}}>
                         <Typography variant={mdUp?'h5':'body2'} sx={{color: 'common.black', fontWeight:800}}>{flagIcon} {location}</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" sx={{typography: 'body2'}}>
                      <Typography variant={mdUp?'h5':'body2'}  sx={{color: 'common.black',fontWeight:800}}>{name}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
}
