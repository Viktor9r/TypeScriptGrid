import React, { useState } from 'react';
import { StyledPageContainer } from './styled';
import { Header } from './Header/Header';
import { ColumnsBlock } from './ColumnsBlock/ColumnsBlock';
import { TopBar } from './TopBar/TopBar';

export const Container = () => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <StyledPageContainer>
      <Header />
      <TopBar showPanel={showPanel} setShowPanel={setShowPanel} />
      {showPanel && (
        <ColumnsBlock showPanel={showPanel} setShowPanel={setShowPanel} />
      )}
    </StyledPageContainer>
  );
};
