import React, { useState } from "react"
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
import { connect } from "react-redux"
import { heroDescription_DE, heroDescription_PL, heroTitle_DE, heroTitle_PL } from "../../../Utils/dictionary"

const HeroSection = ({ langReducer }) => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <PictureBg src={HeroBackground2}/>
        </HeroBg>
        <HeroContent>
          <HeroH1>{langReducer.isPolish ? heroTitle_PL :  heroTitle_DE}</HeroH1>
          <HeroParagraph>{langReducer.isPolish ? heroDescription_PL :  heroDescription_DE}</HeroParagraph>
          <HeroBtnWrapper>
            <Button onMouseEnter={onHover} onMouseLeave={onHover}>
              Check gallery {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

const mapStateToProps = ({ langReducer }) => {
  return { langReducer }
}

export default connect(mapStateToProps)(HeroSection)
