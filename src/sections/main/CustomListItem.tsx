import { Box, ListItem, Typography } from '@mui/material';
import {ReactNode} from "react";

// ----------------------------------------------------------------------
interface CustomListItemProps {
  label: string | ReactNode;
  value: string;
  isFlex?: boolean;
}

const CustomListItem = ({ label, value, isFlex }: CustomListItemProps) => (
  <ListItem
    sx={{
      px: 0,
      py: 0.5,
      alignItems: 'flex-start',
      color: 'white',
      ...(isFlex ? { display: 'flex', justifyContent: 'space-between' } : {}),
    }}
  >
    <Typography
      variant="body2"
      sx={{
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        ml: 1,
        ...(isFlex ? { textAlign: 'right', ml: 2 } : {}),
      }}
    >
      {value}
    </Typography>
  </ListItem>
);

export default CustomListItem;
