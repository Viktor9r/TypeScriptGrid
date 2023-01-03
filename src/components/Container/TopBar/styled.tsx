import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
/* eslint-disable */

export const StyledTopBar = styled('div')(() => ({
  display: 'flex',
}));

export const StyledShowButton = styled(Button)(() => ({
  textTransform: 'none',
  background: 'rgba(0, 66, 105, 0.07)',
  padding: '20px',
  borderRadius: '4px',
  width: '250px',
  textAlign: 'center',
  transition: '0.3s',
  fontSize: '18px',
  color: '#B8BBC1',
  border: '1px solid rgba(0, 66, 105, 0.07)',
  boxSizing: 'border-box',
}))