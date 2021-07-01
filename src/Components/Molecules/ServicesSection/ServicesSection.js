import React from "react"
import {
  StyledServicesItemsContainer, StyledServicesItemTitle,
  StyledServicesSectionContainer,
  StyledServicesSectionH1, StyledServicesSectionItem, StyledServicesSectionItemImg
} from "./ServicesSection.styles"
import BathRoomServiceImg from "../../../Assets/AppImages/bathroom.jpg"
import ElectricityServiceImg from "../../../Assets/AppImages/electricity.jpg"
import WorkerServiceImg from "../../../Assets/AppImages/worker.jpg"
import PurServiceImg from "../../../Assets/AppImages/ocieplenia.jpeg"
const ServicesSection = () => {
  return (
    <>
      <StyledServicesSectionContainer>

        <StyledServicesSectionH1>Nasze usługi</StyledServicesSectionH1>

        <StyledServicesItemsContainer>

          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={BathRoomServiceImg}/>
            <StyledServicesItemTitle>Instalacje sanitarne</StyledServicesItemTitle>
          </StyledServicesSectionItem>

          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={ElectricityServiceImg}/>
            <StyledServicesItemTitle>Instalacje elektryczne</StyledServicesItemTitle>
          </StyledServicesSectionItem>
          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={WorkerServiceImg}/>
            <StyledServicesItemTitle>Prace remontowe</StyledServicesItemTitle>
          </StyledServicesSectionItem>

          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={PurServiceImg}/>
            <StyledServicesItemTitle>Ocieplenia natryskowe</StyledServicesItemTitle>
          </StyledServicesSectionItem>

        </StyledServicesItemsContainer>
      </StyledServicesSectionContainer>
    </>
  )
}

export default ServicesSection
