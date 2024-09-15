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
      <StyledMenuLink className="active" href="/">
        <Box>Home</Box>
      </StyledMenuLink>
      <StyledMenuLink href="#features">
        <Box>Features</Box>
      </StyledMenuLink>
      <StyledMenuLink href="#usage-guide">
        <Box>Usage Guide</Box>
      </StyledMenuLink>
      <StyledMenuLink href="#team">
        <Box>Team</Box>
      </StyledMenuLink>
      <StyledMenuLink href="#contact">
        <Box>Contact</Box>
      </StyledMenuLink>
    </Box>
  );
};

export default NavBar;
