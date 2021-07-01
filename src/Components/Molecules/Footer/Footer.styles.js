import styled from 'styled-components'
import { FaPhoneAlt } from "react-icons/fa/index"
import { AiOutlineMail } from "react-icons/ai/index"

export const StyledFooter = styled.footer`
  width: 100%;
  align-content: center;
  display: flex;
  justify-content: center;
  font-family: Montserrat;
 
`;

export const StyledFooterContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 20px 0;
  
  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: space-around;
    height: 300px;
      padding: 0 0 0 0;
  }
`;

export const StyledFooterItem = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFooterItemRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledPhoneIcon = styled(FaPhoneAlt)`
  width: 20px;
  height: 20px;
  padding-right: 5px;
`;

export const StyledEmailIcon = styled(AiOutlineMail)`
  width: 20px;
  height: 20px;
  padding-right: 5px;
`;

export const StyledHr = styled.hr`
  width: 85%;
`;
