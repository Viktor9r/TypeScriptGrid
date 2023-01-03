import React from 'react';
import { headerClasses, StyledHeader } from './styled';
import logo from '../../../images/ftlogo.png';
/* eslint-disable */

export const Header = () => {
  return (
    <StyledHeader>
      <img
        src={logo}
        alt="company logo"
        className={headerClasses.logo}
      />
    </StyledHeader>
  );
};
