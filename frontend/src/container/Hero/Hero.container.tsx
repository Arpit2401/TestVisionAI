import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import heroImg from '../../assets/Hero.png';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: theme.palette.secondary.main,
        padding: '32px 20px 64px',
        [theme.breakpoints.up('sm')]: {
          padding: '48px 32px 72px',
        },
        [theme.breakpoints.up('md')]: {
          padding: '60px 48px 80px',
        },
        [theme.breakpoints.up('lg')]: {
          padding: '80px 52px',
        },
      }}
    >
      <Box
        maxWidth="1440px"
        width="100%"
        display="flex"
        alignItems="center"
        flexDirection={isMobile ? 'column-reverse' : 'row'}
        gap="32px"
        justifyContent="space-between"
      >
        <Box
          width={isMobile ? '100%' : '48%'}
          sx={{ color: 'white' }}
          display="flex"
          gap="32px"
          alignItems={isMobile ? 'center' : 'left'}
          flexDirection="column"
        >
          <Typography
            fontSize={isMobile ? '3.125rem' : '4.8rem'}
            textAlign={isMobile ? 'center' : 'left'}
            fontWeight={700}
            lineHeight={1.5}
          >
            Empower Your Testing with{' '}
            <span style={{ color: theme.palette.primary.main }}>
              AI-Generated
            </span>{' '}
            Test Cases
          </Typography>
          <Button
            sx={{
              width: '100%',
              maxWidth: '200px',
              background: theme.palette.primary.main,
              color: 'white',
              '&:active, &:hover, &:focus': {
                background: 'white',
                color: theme.palette.secondary.main,
              },
            }}
          >
            Get Started for Free
          </Button>
        </Box>
        <Box
          sx={{
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: '50%',
            },
            [theme.breakpoints.up('lg')]: {
              width: '40%',
            },
          }}
        >
          <Box component="img" width="100%" src={heroImg} alt="Hero Image" />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
