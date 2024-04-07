import {Box, Typography} from '@mui/material';
import EcommerceProductViewGridItem from '../_ecommerce/product/item/ecommerce-product-view-grid-item';
import React from "react";
import XPLADataBody from "./XPLADataBody";
import OasysDataBody from "./OasysDataBody";

type Props = {
  data?: any;
  type?: 'XPLA' | 'OASYS' | 'MATIC' | 'ETH';
};

export default function CardList({ data, type }: Props) {


  const dataComponent = data ? (
    <Box
      rowGap={4}
      columnGap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)',
      }}
    >
      {data.map((item:any, index:number) => (
        <EcommerceProductViewGridItem key={index} data={item} />
      ))}
    </Box>
  ) : (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
      }}
    >
      <Typography variant="h6">No Data</Typography>
    </Box>
  );

  return <>
      {type === 'OASYS' && <OasysDataBody />}
      {type === 'XPLA' && <XPLADataBody />}
  </>
}
