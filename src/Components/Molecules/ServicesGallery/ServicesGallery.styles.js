import styled from 'styled-components';

export const StyledGalleryContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledGalleryWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 90%;
  }
`;