import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient, hexToRgbChannel } from 'src/theme/styles';
// import BackgroundColor from 'src/assets/icons/backgroundColor';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
};

export function AppWelcome({ title, description, action, img, sx, ...other }: Props) {
  const theme = useTheme();

  const channelColor = hexToRgbChannel('#491D8B');


  return (
    <Box
      sx={{
        ...bgGradient({
          color: `to right, ${varAlpha(channelColor, 0.85)} 0%, ${varAlpha(channelColor, 0.8)} 75%`,
          imgUrl: `${CONFIG.site.basePath}/assets/background/backgroundNew-5.webp`,
        }),
        pt: 5,
        pb: 5,
        pr: 3,
        gap: 5,
        borderRadius: 2,
        display: 'flex',
        height: { md: 1 },
        position: 'relative',
        pl: { xs: 3, md: 5 },
        alignItems: 'center',
        color: 'common.white',
        textAlign: { xs: 'center', md: 'left' },
        flexDirection: { xs: 'column', md: 'row' },
        border: `solid 1px ${theme.vars.palette.grey[800]}`,
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Typography variant="h4" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.64, maxWidth: 360, ...(action && { mb: 3 }) }}>
          {description}
        </Typography>

        {action && action}
      </Box>

      {img && <Box sx={{ maxWidth: 260 }}>{img}</Box>}
    </Box>
  );
}
