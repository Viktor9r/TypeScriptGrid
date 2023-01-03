import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
/* eslint-disable */

export const StyledButtonsBlock = styled('div')(() => ({
  marginTop: '15px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  marginBottom: '15px',
}))

export const StyledButton = styled(Button)(({ theme }) => ({
color: theme.palette.secondary.main,
  background: 'rgba(0, 66, 105, 0.07)',
  textTransform: 'none',
  borderRadius: '4px',
  transition: '0.3s',
  border: 'none',
  boxShadow: 'none',
  fontSize: '18px',
  ["&:hover"]: {
    cursor: 'pointer',
    background: '#182128',
  }
}));
