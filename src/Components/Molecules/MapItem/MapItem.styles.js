import styled from 'styled-components'

export const MapItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MapItemWrapper = styled.div`
  padding: 20px 0 20px 0;
  align-items: center;
`;

export const ContactPageDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ContactPageDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ContactPageDescriptionH1 = styled.h1`
  font-family: Montserrat,serif;
  font-size: 28px;
  font-weight: 500;
  
  @Media screen and (max-width: 768px) {
      font-size: 20px;
  }
`;

export const ContactPageDescriptionH2 = styled.h2`
  font-family: Montserrat,serif;
  font-size: 24px;
  font-weight: 500;
  
  @Media screen and (max-width: 768px) {
      font-size: 28px;
  }
`;

export const ContactPageDescriptionParagraph = styled.p`
  font-family: Montserrat,serif;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  
  @Media screen and (max-width: 768px) {
      font-size: 16px;
  }
`;
