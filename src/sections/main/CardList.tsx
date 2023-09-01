import { Box, Typography } from '@mui/material';
import EcommerceProductViewGridItem from '../_ecommerce/product/item/ecommerce-product-view-grid-item';

type Props = {
  data?: any;
};

export default function CardList({ data }: Props) {
  return data ? (
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
}
