import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md/index"

export const HeroContainer = styled.div`
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 650px) {
    height: 300px;
  }
  @media screen and (max-width: 400px) {
    height: 250px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;

export const PictureBg = styled.img`
  width: 100%;
  max-height: 600px;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  text-shadow: 1px 0 0 #7c7c7c, 0 -1px 0 #7c7c7c, 0 1px 0 #7c7c7c, -1px 0 0 #7c7c7c;
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 580px) {
    font-size: 24px;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
    margin-top: -20px;
  }
`;

export const HeroParagraph = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 26px;
  text-align: center;
  max-width: 600px;
  text-shadow: 1px 0 0 #7c7c7c, 0 -1px 0 #7c7c7c, 0 1px 0 #7c7c7c, -1px 0 0 #7c7c7c;
  
  @media screen and (max-width: 580px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
