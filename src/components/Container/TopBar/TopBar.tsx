import React from 'react';
import { StyledTopBar, StyledShowButton } from './styled';

type Props = {
  showPanel: boolean,
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TopBar: React.FC<Props> = ({ showPanel, setShowPanel }) => {

  const showGrid = () => {
    setShowPanel(true);
  }

  if (!showPanel) {
    return (
      <StyledTopBar>
        <StyledShowButton
          type="button"
          onClick={showGrid}
        >
          Show Grid
        </StyledShowButton>
      </StyledTopBar>
    )
  }

  return null;
};