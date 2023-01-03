import { styled } from '@mui/material/styles';

type NumberProps = {
  team: boolean,
};

export const StyledScore = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  background: '#182128',
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 6px',
  height: '81%',
  marginRight: '6px',
  justifyContent: 'space-between',
  borderRadius: '8px',
}));

export const StyledFlag = styled('img')(() => ({
  width: '37px',
  height: '26px',
  border: 'none',
  borderRadius: '4px',
  objectFit: 'cover',
  backgroundSize: 'cover',
}));

export const StyledFlagEmpty = styled('div')(({}) => ({
  width: '37px',
  height: '26px',
  borderRadius: '4px',
  background: 'rgba(255, 255, 255, 0.2)',
}));

export const StyledScoreNumber = styled('div')<NumberProps>(({ team }) => ({
  textAlign: 'center',
  color: team ? '#fff' : 'rgba(255, 255, 255, 0.2)',
}))
