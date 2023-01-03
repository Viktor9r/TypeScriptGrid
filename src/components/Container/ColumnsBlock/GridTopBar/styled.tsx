import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import crossIcon from '../../../../images/local_hospital.png';

const PREFIX = "gridTopBar"

export const topBarClasses = {
  text: `${PREFIX}__team`,
};

export const StyledTopBar = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  gridColumn: '1/13',
  [`& .${topBarClasses.text}`]: {
    fontSize: '16px',
    textTransform: 'uppercase',
  },
}));

export const TopBarButton = styled(Button)(({ theme }) => ({
  background: '#182128',
  border: 'none',
  width: '20px',
  height: '20px',
  backgroundImage: crossIcon,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '50%',
  [`&:hover`]: {
    cursor: 'pointer',
  },
}));