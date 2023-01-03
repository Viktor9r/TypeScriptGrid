import React from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { StyledButton, StyledButtonsBlock } from './styled';

type Props = {
  index: number,
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  maxIndex: number,
  breakpoint: number,
  screenWidth: number,
}

export const Buttons: React.FC<Props> = ({
  index,
  setIndex,
  maxIndex,
  breakpoint,
  screenWidth,
}) => {

  const prevClick = () => {
    setIndex((i: number) => i - 1);
  };

  const nextClick = () => {
    setIndex((i: number) => i + 1);
  };

  return (
    <StyledButtonsBlock>
        <StyledButton
          variant="contained"
          onClick={prevClick}
          disabled={index === 0}
          startIcon={<ArrowBack />}
          size="large"
        >
          Previous Stage
        </StyledButton>
        {screenWidth < breakpoint ? (
          <StyledButton
            variant="contained"
            onClick={nextClick}
            endIcon={<ArrowForward />}
            disabled={index >= maxIndex - 1}
            size="large"
          >
            Next Stage
          </StyledButton>
        ) : (
          <StyledButton
            variant="contained"
            onClick={nextClick}
            endIcon={<ArrowForward />}
            disabled={index > maxIndex - 3}
            size="large"
          >
            Next Stage
          </StyledButton>
        )}
    </StyledButtonsBlock>
  );
};
