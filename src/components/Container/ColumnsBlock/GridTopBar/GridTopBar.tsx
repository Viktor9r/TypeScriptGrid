import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import {
  StyledTopBar,
  topBarClasses,
  TopBarButton,
} from './styled';


type Props = {
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>
};

export const GridTopBar: React.FC<Props> = ({ setShowPanel }) => {
  const hidePanel = () => {
    setShowPanel(false);
  };

  return (
    <StyledTopBar>
      <div className={topBarClasses.text}>
        ЮНІОРИ, ЮНІОРИ, Мужчины, -59
      </div>
      <TopBarButton
        onClick={hidePanel}
        startIcon={<CloseIcon />}
      ></TopBarButton>
    </StyledTopBar>
  );
};
