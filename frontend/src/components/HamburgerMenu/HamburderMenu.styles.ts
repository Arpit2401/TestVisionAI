import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledMenuLink = styled(Link)(({ theme }) => ({
  padding: '20px',
  color: 'white',
  width: '100%',
  fontWeight: 'bold',
  borderBottom: `1px solid ${theme.palette.grey[500]}`,
  '&:hover, &:active, &:focus': {
    color: theme.palette.primary.main,
    background: 'white',
  },
}));
