import { styled } from '@mui/material/styles';
/* eslint-disable */

export const StyledCourt = styled('div')(() => ({
  marginBottom: '12px',
  fontSize: '12px',
  marginLeft: '55px',
  height: '15px',
}));

export const StyledCell = styled('div')(() => ({
  display: 'flex',
  boxSizing: 'border-box',
  borderRadius: '16px',
  margin: '6px auto',
  width: '100%',
  marginBottom: '12px',
  position: 'relative',
  transition: '0.3s',
  zIndex: 2,
  ["&::after"]: {
    content: '""',
    display: 'block',
    borderTop: '2px solid #fff',
    position: 'absolute',
    height: '65px',
    width: '4px',
    right: '0',
    top: '33px',
    transform: 'translateX(100%)',
    borderRight: '2px solid #fff',
    borderTopRightRadius: '8px',
    borderBottom: '2px solid #fff',
    borderBottomRightRadius: '8px',
    zIndex: -1,
  },
}))

const PREFIX = "cell";

export const teamClasses = {
  team: `${PREFIX}__team`,
};

export const StyledTeamBox = styled('div')(() => ({
  width: '100%',
  [`& .${teamClasses.team}`]: {
    marginBottom: '6px',
    width: '100%',
  },
  ["&>:last-child"]: {
    marginBottom: '0',
  },
}));
