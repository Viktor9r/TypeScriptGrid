import React from 'react';
import FirstFlag from '../../../../../../images/UA.png';
import {
  StyledScore,
  StyledFlag,
  StyledScoreNumber,
  StyledFlagEmpty,
} from './styled';
/* eslint-disable */

type Props = {
  pair: Pair,
};

export const Score: React.FC<Props> = ({ pair }) => (
  <StyledScore>
    {pair.user1 ? (
      <StyledFlag src={FirstFlag} />
    ) : (
      <StyledFlagEmpty />
    )}
    <StyledScoreNumber team={pair ? true : false}>{pair.number}</StyledScoreNumber>
    {pair.user2 ? (
      <StyledFlag src={FirstFlag} />
    ) : (
      <StyledFlagEmpty />
    )}
  </StyledScore>
);
