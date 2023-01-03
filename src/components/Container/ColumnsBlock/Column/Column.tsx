import React from 'react';
import {
  StyledColumn,
  StyledCellsList,
} from './styled';
import { Cell } from './Cell/Cell';
/* eslint-disable */

type Props = {
  pairs: Pair[],
  selectedUserId: number,
  setSelectedUserId: React.Dispatch<React.SetStateAction<number>>,
  allSerialsLast: Array<number>,
  cancelSelectUser: boolean,
};

export const Column: React.FC<Props> = ({
  pairs,
  selectedUserId,
  setSelectedUserId,
  cancelSelectUser,
}) => {

  return (
    <StyledColumn>
      <StyledCellsList>
        {pairs.map((pair: Pair) => (
          <div style={{height: '163px'}} key={pair.id}>
            <Cell
              pair={pair}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              cancelSelectUser={cancelSelectUser}
            />
          </div>
        ))}
      </StyledCellsList>
    </StyledColumn>
  );
};
