import { Box, Button, useTheme } from '@mui/material';
import { StyledMenuLink } from './NavBar.styles';

const NavBar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <StyledMenuLink className="active" to="/">
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
  );
};

export default NavBar;
