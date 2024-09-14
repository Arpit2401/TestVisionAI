import { Box, Button, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

import { StyledMenuLink } from './HamburderMenu.styles';
import { HamburgerMenuPropsType } from './HamburgerMenu.types';

const HamburgerMenu: React.FC<HamburgerMenuPropsType> = ({ isMenuOpen }) => {
  const theme = useTheme();

  const slideIn = keyframes`
  from {
    transform: translateY(-150%);
  }
  to {
    transform: translateY(0%);
  }
`;

  const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-150%);
  }
`;
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
        animation: isMenuOpen
          ? `${slideIn} 1s forwards`
          : `${slideOut} 1s forwards`,
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
