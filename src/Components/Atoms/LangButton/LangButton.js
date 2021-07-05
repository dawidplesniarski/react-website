import React from 'react'
import { StyledLangButton, StyledLangIcon } from "./LangButton.styles"
import polishFlag from '../../../Assets/Icons/poland.png';
import germanFlag from '../../../Assets/Icons/germany.png';

const LangButton = ({isPolish, onClick}) => {
  return(
    <>
      <StyledLangButton onClick={onClick}>
        {!isPolish ? <StyledLangIcon src={polishFlag} alt={'flag icon'}/> : <StyledLangIcon src={germanFlag} alt={'flag icon'}/>}
      </StyledLangButton>
    </>
  );
};

export default LangButton;
