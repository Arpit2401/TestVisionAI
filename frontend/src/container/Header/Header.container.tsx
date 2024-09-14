import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import logo from '../../assets/TestVisionAILogo.png';
import { colorPalette } from '../../constants';

const Header = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: colorPalette.blue[500],
        padding: '16px 20px',
        [theme.breakpoints.up('sm')]: {
          padding: '24px 32px',
        },
        [theme.breakpoints.up('md')]: {
          padding: '24px 48px',
        },
        [theme.breakpoints.up('lg')]: {
          padding: '24px 52px',
        },
      }}
    >
      <Box
        maxWidth="1440px"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          sx={{
            maxWidth: '10rem',
            [theme.breakpoints.up('sm')]: {
              maxWidth: '12rem',
            },
            [theme.breakpoints.up('md')]: {
              maxWidth: '15rem',
            },
          }}
        >
          <Box
            component="img"
            width="100%"
            src={logo}
            alt="Test Vision AI Logo"
            sx={{ borderRadius: '4px' }}
          />
        </Box>
        {/* Render Menu here */}
        <></>
      </Box>
    </Box>
  );
};

export default Header;
