import React, {useState} from "react"
import HeroBackground2 from "../../../Assets/AppImages/hero-section-2.jpg"
import {
  ArrowForward, ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroParagraph,
  PictureBg
} from "./HeroElements"
import { Button } from "../../Atoms/Button/Button.styles"

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <PictureBg src={HeroBackground2}/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Houses Renovation company</HeroH1>
          <HeroParagraph>
            Contact us and see more informations!
          </HeroParagraph>
          <HeroBtnWrapper>
            <Button onMouseEnter={onHover} onMouseLeave={onHover}>
              Check gallery {hover ? <ArrowForward/> : <ArrowRight/> }
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
