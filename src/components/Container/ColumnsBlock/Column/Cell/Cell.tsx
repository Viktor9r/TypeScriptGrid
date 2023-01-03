import React from 'react';
import {
  StyledCourt,
  StyledCell,
  StyledTeamBox,
  teamClasses,
} from './styled';
import { Team } from './Team/Team';
import { Score } from './Score/Score';
/* eslint-disable */

type Props = {
  pair: Pair,
  selectedUserId: number,
  setSelectedUserId: React.Dispatch<React.SetStateAction<number>>,
  cancelSelectUser: boolean,
}

export const Cell: React.FC<Props> = ({
  pair,
  selectedUserId,
  setSelectedUserId,
  cancelSelectUser,
}) => (
  <>
    <StyledCourt>{pair.number > 0 ? (
      `Court ${pair.court} | 0:00 pm`
      ) : (
        ' '
      )}
    </StyledCourt>
    <StyledCell>
      <div>
        <Score pair={pair} />
      </div>
      <StyledTeamBox>
        <div className={teamClasses.team}>
          <Team
            user={pair.user1}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
            cancelSelectUser={cancelSelectUser}
            scores={pair.score_one}
            winnerId={pair.winner_id}
          />
        </div>
        <div className={teamClasses.team}>
          <Team
            user={pair.user2}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
            scores={pair.score_two}
            winnerId={pair.winner_id}
            cancelSelectUser={cancelSelectUser}
          />
        </div>
      </StyledTeamBox>
    </StyledCell>
  </>
);
