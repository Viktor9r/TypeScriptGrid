import { List } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledColumn = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingRight: '32px',
  paddingLeft: '20px',
}));

export const StyledCellsList = styled(List)(() => ({
  paddingInlineStart: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  borderRadius: '16px',
  boxSizing: 'border-box',
  listStyle: 'none',
  width: '100%',
  margin: '0 auto',
}))
