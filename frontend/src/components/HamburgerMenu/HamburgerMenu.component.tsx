import { Box, Button, useTheme } from '@mui/material';
import { StyledMenuLink } from './HamburderMenu.styles';

const HamburgerMenu = () => {
  const theme = useTheme();

  return (
    <Box
      height="100%"
      sx={{
        bottom: 0,
        overflow: 'auto',
        background: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StyledMenuLink to="/">
          <Box>Home</Box>
        </StyledMenuLink>
        <StyledMenuLink to="/">
          <Box>Features</Box>
        </StyledMenuLink>
        <StyledMenuLink to="/">
          <Box>Usage Guide</Box>
        </StyledMenuLink>
        <StyledMenuLink to="/">
          <Box>Team</Box>
        </StyledMenuLink>
        <StyledMenuLink to="/">
          <Box>Contact</Box>
        </StyledMenuLink>
      </Box>
      <Button
        sx={{
          maxWidth: '150px',
          margin: '20px',
          background: theme.palette.secondary.main,
          color: 'white',
          '&:active, &:hover, &:focus': {
            background: 'white',
            color: theme.palette.secondary.main,
          },
        }}
      >
        Log In
      </Button>
    </Box>
  );
};

export default HamburgerMenu;
