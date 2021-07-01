import styled from 'styled-components'

export const StyledServicesSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

export const StyledServicesSectionH1 = styled.h1`
  font-size: 32px;
  font-family: Montserrat,serif;
  
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 550px) {
    font-size: 24px;
  }
`;

export const StyledServicesItemsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  
  @media screen and (max-width: 1000px) {
  flex-direction: column;
  }
`;

export const StyledServicesSectionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  
  @media screen and (max-width: 1000px) {
    width: 350px;
    margin-bottom: 40px;
  }
  
  @media screen and (max-width: 428px) {
    width: 280px;
    margin-bottom: 24px;
  }
`;

export const StyledServicesSectionItemImg = styled.img`
  width: 100%;
  @media screen and (min-width: 1000px) {
    height: 130px;
  }
`;

export const StyledServicesItemTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
`;
