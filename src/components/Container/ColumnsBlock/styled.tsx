import { styled } from '@mui/material/styles';
import { Box, Tab } from '@mui/material';

export const StyledRoundSettersBlock = styled('div')(() => ({
  marginTop: '33px',
  marginBottom: '15px',
  transition: '0.3s',
}));

export const StyledSettersBox = styled(Box)(() => ({
  border: 'none',
}));

export const StyledTab = styled(Tab)(() => ({
  boxSizing: 'border-box',
  textTransform: 'none',
  fontSize: '14px',
  transition: '0.3s',
  color: '#fff',
  marginRight: '5px',
  ["&:hover"]: {
    background: '#525D67',
    borderRadius: '4px',
  },
  ["&:focus"]: {
    background: '#525D67',
    borderRadius: '4px',
    border: 'none',
    color: '#fff',
  },
  ["&.Mui-selected"]: {
    color: '#fff',
    background: '#525D67',
    borderRadius: '4px',
    border: 'none',
  },
  ["&.MuiTabs-flexContainer"]: {
    flexWrap: 'wrap',
  }
}));

export const StyledGridBox = styled(Box)(() => ({
  width: '100%',
  gap: '15px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  ['@media (max-width: 1280px)']: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  ['@media (max-width: 900px)']: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  }
}))

export const StyledColumn = styled('div')(() => ({
  background: '#2A353F',
  borderRadius: '18px',
}));

export const StyledColumnRounds = styled('div')(() => ({
  background: '#525D67',
  margin: 'auto',
  textAlign: 'center',
  marginBottom: '12px',
  boxSizing: 'border-box',
  padding: '5px',
  fontSize: '16px',
  border: '1px solid #313C44',
  borderRadius: '8px',
  marginRight: '20px',
  marginLeft: '20px',
  marginTop: '22px',
}))