import Box from '@mui/material/Box';
import Stack, { StackProps } from '@mui/material/Stack';
import Label from 'src/components/label';
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import { Card, Checkbox } from '@mui/material';

// ----------------------------------------------------------------------

interface Props  {
  data: any;
}

export default function CompleteCard({ data }: Props) {
  const {label , thumbnail , title} = data

  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 500,
        background: 'rgba(0, 184, 217, 0.24)',
        boxShadow: ' 0px 8px 16px 0px rgba(0, 184, 217, 0.24)',
        borderRadius: 2,
        color: 'white',
      }}
    >
      {/* 썸네일 */}
      <Image
        alt={thumbnail}
        src="/assets/images/sample/image08.svg"
        sx={{ width: '100%', p: 1, borderRadius: 2 }}
      />

      {/* 상세 정보 */}
      <Box sx={{ p: 1.5 }}>
        {/* 라벨 */}
        <Label
          variant="filled"
          color="info"
          sx={{
            color: 'white',
          }}
        >
          {label}
        </Label>

        <TextMaxLine variant="subtitle2" line={1} sx={{ my: 1 }}>
          {title}
        </TextMaxLine>
      </Box>
    </Card>
  );
}
