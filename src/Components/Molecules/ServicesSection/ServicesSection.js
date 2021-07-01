import React from "react"
import {
  StyledServicedItemDescription,
  StyledServicesItemsContainer, StyledServicesItemTitle,
  StyledServicesSectionContainer,
  StyledServicesSectionH1, StyledServicesSectionItem, StyledServicesSectionItemImg
} from "./ServicesSection.styles"
import BathRoomServiceImg from "../../../Assets/AppImages/bathroom.jpg"
import ElectricityServiceImg from "../../../Assets/AppImages/electricity.jpg"
import WorkerServiceImg from "../../../Assets/AppImages/worker.jpg"
import PurServiceImg from "../../../Assets/AppImages/ocieplenia.jpeg"
import { Button } from "../../Atoms/Button/Button.styles"

const ServicesSection = () => {
  return (
    <>
      <StyledServicesSectionContainer id={'ServicesSection'}>
        <StyledServicesSectionH1>Nasze usługi</StyledServicesSectionH1>
        <StyledServicesItemsContainer>
          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={BathRoomServiceImg}/>
            <StyledServicesItemTitle>Instalacje sanitarne</StyledServicesItemTitle>
            <StyledServicedItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </StyledServicedItemDescription>
            <Button>Sprawdź</Button>
          </StyledServicesSectionItem>

          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={ElectricityServiceImg}/>
            <StyledServicesItemTitle>Instalacje elektryczne</StyledServicesItemTitle>
            <StyledServicedItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </StyledServicedItemDescription>
            <Button>Sprawdź</Button>
          </StyledServicesSectionItem>

          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={WorkerServiceImg}/>
            <StyledServicesItemTitle>Prace remontowe</StyledServicesItemTitle>
            <StyledServicedItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </StyledServicedItemDescription>
            <Button>Sprawdź</Button>
          </StyledServicesSectionItem>

          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={PurServiceImg}/>
            <StyledServicesItemTitle>Ocieplenia natryskowe</StyledServicesItemTitle>
            <StyledServicedItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </StyledServicedItemDescription>
            <Button>Sprawdź</Button>
          </StyledServicesSectionItem>

        </StyledServicesItemsContainer>
      </StyledServicesSectionContainer>
    </>
  )
}

export default ServicesSection
