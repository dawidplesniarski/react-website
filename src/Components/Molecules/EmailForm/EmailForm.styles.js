import styled from 'styled-components'

export const StyledEmailFormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
`;

export const StyledEmailFormWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  @media screen and (max-width: 1100px) {
    width: 70%;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;
