import { styled } from '@mui/material/styles';

export const StyledPage = styled('div')(( { theme }) => ({
  fontSize: '18px',
  color: theme.palette.primary.main,
}))