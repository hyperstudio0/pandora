import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack, {StackProps} from '@mui/material/Stack';

import {paths} from 'src/routes/paths';
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import {RouterLink} from 'src/routes/components';
import {IProductItemProps} from 'src/types/product';
import TextMaxLine from 'src/components/text-max-line';

import {Card, Checkbox} from '@mui/material';
import React, {useEffect, useState} from 'react';
import ProductPrice from '../../common/product-price';
import ProductRating from '../../common/product-rating';
import Typography from "@mui/material/Typography";
import {useMainPageContext} from "../../../../app/main/MainPageProvider";

// ----------------------------------------------------------------------

interface Props {
    data?: any;
}

export default function EcommerceProductViewGridItem({
                                                         data,
                                                     }: Props) {

    const {selectTokens, handleSetSelectTokens, handleRemoveTokens} = useMainPageContext();

    // data
    const {id, label, thumbnail, title, gameName, gameLogo, weight} = data;

    //  label color
    let labelColor: 'info' | 'error' | 'warning' | 'primary' | 'default';

    switch (label) {
        case 'SuperRare':
            labelColor = 'info';
            break;
        case 'Legendary':
            labelColor = 'error';
            break;
        case 'Hero':
            labelColor = 'warning';
            break;
        case 'Rare':
            labelColor = 'primary';
            break;
        default:
            labelColor = 'default';
    }

    // checked
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if(!isChecked) {
            console.log('handleSetSelectTokens', data);
            handleSetSelectTokens(data);
        } else {
            console.log('handleRemoveTokens', id);
            handleRemoveTokens(id);
        }
    };

    useEffect(() => {
        console.log(selectTokens, 'selectTokens');
    }, [isChecked]);

    return (
        <Card
            sx={{
                background: isChecked
                    ? 'rgba(34, 197, 94, 0.32)'
                    : 'rgba(0, 0, 0, 0.24)',
                boxShadow: isChecked
                    ? '0px 8px 16px 0px rgba(34, 197, 94, 0.24)'
                    : '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)',
                borderRadius: 2,
                color: 'white',
                position: 'relative',
            }}
        >
            {/* 라벨 */}
            {label && <Label
                variant="filled"
                color={labelColor}
                sx={{
                    position: 'absolute',
                    m: 1,
                    top: 10,
                    right: 10,
                    zIndex: 9,
                    color: 'white',
                }}
            >
                {label}
            </Label>}

            {/* 체크 박스 */}
            <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
                icon={
                    <Image
                        alt="선택하지 않은 아이콘"
                        src="/assets/icons/sample/check_black.svg"
                        sx={{width: 24, height: 24}}
                    />
                }
                checkedIcon={
                    <Image
                        alt="선택된 아이콘"
                        src="/assets/icons/sample/checked_primary.svg"
                        sx={{width: 24, height: 24}}
                    />
                }
                sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    zIndex: 9,
                }}
            />

            {/* 썸네일 */}
            {thumbnail && <Image
                alt="썸네일 이미지"
                src={thumbnail}
                sx={{width: '100%', p: 0.5, borderRadius: 2}}
            />}
            {!thumbnail && <Box width={180} height={180}></Box>}

            {/* 상세 정보 */}
            <Box sx={{p: 1.5, minWidth: 180}}>
                <Typography
                    variant="subtitle2"
                    sx={{
                        mb: 1,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        width: '100%'
                    }}
                >
                    {title}
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <TextMaxLine variant="caption" line={1} sx={{opacity: 0.8}}>
                        {gameName}
                    </TextMaxLine>
                    <Image alt="이미지" src={gameLogo}/>
                </Stack>
            </Box>
        </Card>
    );
}
