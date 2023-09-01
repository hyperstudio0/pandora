import Stack from '@mui/material/Stack';

import { NavProps } from '../types';

import NavList from './nav-list';
import {useResponsive} from "../../../../hooks/use-responsive";

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx }: NavProps) {
  const mdUp = useResponsive('up', 'md');
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={mdUp ? 5 : 2}
      sx={{
        height: 1,
        ...sx,
      }}
    >
      {data.map((link) => (
        <NavList key={link.title} item={link} />
      ))}
    </Stack>
  );
}
