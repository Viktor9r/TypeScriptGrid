import React from 'react';
import {
  StyledTeam,
  StyledTeamText,
  StyledTeamTextTitle,
  StyledTeamTextExtra,
  StyledTeamResults,
  StyledTeamCoefs,
  StyledTeamScore,
  scoreClasses,
} from './styled';
/* eslint-disable */

type Props = {
  user: Competitor | null | undefined,
  selectedUserId: number,
  setSelectedUserId: React.Dispatch<React.SetStateAction<number>>,
  scores: number,
  winnerId: number,
  cancelSelectUser: boolean,
}

export const Team: React.FC<Props> = ({
  user,
  selectedUserId,
  setSelectedUserId,
  scores,
  winnerId,
  cancelSelectUser,
}) => {

  const handleMouseOver = () => {
    if (!cancelSelectUser && user) {
      setSelectedUserId(user.user.id);
    } else {
      null;
    };
  };

  const handleMouseOut = () => {
    if (!cancelSelectUser) {
      setSelectedUserId(-1);
    } else {
      null;
    };
  };

  return (
    <>
      {user ? (
        <StyledTeam
          selected={user.user.id === selectedUserId}
          onMouseOver={() => handleMouseOver()}
          onMouseOut={() => handleMouseOut()}
          isWinner={user.user.id === winnerId}
        >
          <StyledTeamText>
                <StyledTeamTextTitle>{user.user.name} {user.user.surname}</StyledTeamTextTitle>
                <StyledTeamTextExtra team={user}>{user.org.title}</StyledTeamTextExtra>
                <StyledTeamTextExtra team={user}/>
              </StyledTeamText>
              <StyledTeamResults team={user}>
                <StyledTeamCoefs>
                  <div className={scoreClasses.coefBlock}>0</div>
                  <div className={scoreClasses.coefBlock}>24</div>
                  <div className={scoreClasses.coefBlock}>0</div>
                </StyledTeamCoefs>
                <StyledTeamScore>{scores}</StyledTeamScore>
              </StyledTeamResults>
        </StyledTeam>
      ) : (
        <StyledTeam isWinner={false} selected={false}>
          <StyledTeamText>
                <StyledTeamTextTitle>'NA'</StyledTeamTextTitle>
                <StyledTeamTextExtra team={false}></StyledTeamTextExtra>
                <StyledTeamTextExtra team={false}/>
              </StyledTeamText>
              <StyledTeamResults team={false}>
              </StyledTeamResults>
        </StyledTeam>
      )}
    </>
  )
};
