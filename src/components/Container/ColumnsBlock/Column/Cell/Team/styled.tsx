import { styled } from '@mui/material/styles';

type TeamProps = {
  isWinner: boolean,
  selected: boolean,
};

type ExtraTextProps = {
  team: Competitor | boolean,
}

export const StyledTeam = styled('div')<TeamProps>(({ isWinner, theme, selected }) => ({
  background: selected ? 'rgb(183, 44, 44)' : '#182128',
  borderRadius: '8px',
  padding: '12px 17px',
  fontSize: '14px',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  transition: '0.3s',
  position: 'relative',
  ["&::after"]: {
    content: isWinner ? '" "' : null,
    position: 'absolute',
    width: '2px',
    height: '85%',
    bottom: '4px',
    right: '0px',
    borderRight: isWinner ? '2px solid #44B181' : `1px solid #182128`,
    borderRadius: '14px',
  }
}));

export const StyledTeamText = styled('div')(() => ({
  paddingRight: '3px',
}))

export const StyledTeamTextTitle = styled('div')(() => ({
  marginBottom: '3px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  oveflow: 'hidden',
}));

export const StyledTeamTextExtra = styled('div')<ExtraTextProps>(({ team }) => ({
  marginBottom: '2px',
  fontSize: '8px',
  color: '#B8BBC1',
  width: !team ? '42px' : 'auto',
  height: !team ? '3px' : 'auto',
  background: !team ? 'rgba(255, 255, 255, 0.2)' : 'none',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}));

export const StyledTeamResults = styled('div')<ExtraTextProps>(({ team }) => ({
  display: team ? 'flex' : 'none',
}));

const PREFIX = "team__coef";

export const scoreClasses = {
  coefBlock: `${PREFIX}-block`,
};

export const StyledTeamCoefs = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: '14px',
  [`& .${scoreClasses.coefBlock}`]: {
    width: '19px',
    height: '19px',
    background: '#525D67',
    borderRadius: '2px',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '10px',
    marginRight: '4px',
    verticalAlign: 'middle',
    lineHeight: '19px',
  },
  ["&>:nth-child(2)"]: {
    background: '#44B181',
  },
}));

export const StyledTeamScore = styled('div')(() => ({
  top: '20px',
  bottom: '0',
  fontSize: '20px',
  lineHeight: '35px',
}))
