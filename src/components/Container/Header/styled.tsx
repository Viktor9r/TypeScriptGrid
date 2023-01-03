import { styled } from '@mui/material/styles';
/* eslint-disable */

const PREFIX = 'header';

export const headerClasses = {
  logo: `${PREFIX}__logo`,
};

export const StyledHeader = styled('div')(() => ({
  padding: '20px',
  display: 'flex',
  [`& .${headerClasses.logo}`]: {
    width: '100px',
    ["@media(min-width: 900px)"]: {
      width: '150px',
    },
  },
}));