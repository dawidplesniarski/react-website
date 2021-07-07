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
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
  servicesSection1_DE,
  servicesSection1_PL,
  servicesSection2_DE,
  servicesSection2_PL,
  servicesSection3_DE,
  servicesSection3_PL,
  servicesSection4_DE,
  servicesSection4_PL,
  servicesSectionButton_DE,
  servicesSectionButton_PL,
  servicesSectionDescription1_DE,
  servicesSectionDescription1_PL,
  servicesSectionDescription2_DE,
  servicesSectionDescription2_PL, servicesSectionDescription3_DE,
  servicesSectionDescription3_PL, servicesSectionDescription4_DE, servicesSectionDescription4_PL,
  servicesSectionTitle_DE,
  servicesSectionTitle_PL
} from "../../../Utils/dictionary"

const ServicesSection = ({ langReducer }) => {
  return (
    <>
      <StyledServicesSectionContainer id={"ServicesSection"}>
        <StyledServicesSectionH1>{langReducer.isPolish ? servicesSectionTitle_PL : servicesSectionTitle_DE}</StyledServicesSectionH1>
        <StyledServicesItemsContainer>
          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={BathRoomServiceImg}/>
            <StyledServicesItemTitle>{langReducer.isPolish ? servicesSection1_PL : servicesSection1_DE}</StyledServicesItemTitle>
            <StyledServicedItemDescription>{langReducer.isPolish ? servicesSectionDescription1_PL : servicesSectionDescription1_DE}</StyledServicedItemDescription>
            <Button to={'/bathroom'}>{langReducer.isPolish ? servicesSectionButton_PL : servicesSectionButton_DE}</Button>
          </StyledServicesSectionItem>

          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={ElectricityServiceImg}/>
            <StyledServicesItemTitle>{langReducer.isPolish ? servicesSection2_PL : servicesSection2_DE}</StyledServicesItemTitle>
            <StyledServicedItemDescription>{langReducer.isPolish ? servicesSectionDescription2_PL : servicesSectionDescription2_DE}</StyledServicedItemDescription>
            <Button to={'/electro-installations'}>{langReducer.isPolish ? servicesSectionButton_PL : servicesSectionButton_DE}</Button>
          </StyledServicesSectionItem>

          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={WorkerServiceImg}/>
            <StyledServicesItemTitle>{langReducer.isPolish ? servicesSection3_PL : servicesSection3_DE}</StyledServicesItemTitle>
            <StyledServicedItemDescription>{langReducer.isPolish ? servicesSectionDescription3_PL : servicesSectionDescription3_DE}</StyledServicedItemDescription>
            <Button to={'/renovations'}>{langReducer.isPolish ? servicesSectionButton_PL : servicesSectionButton_DE}</Button>
          </StyledServicesSectionItem>

          <StyledServicesSectionItem>
            <StyledServicesSectionItemImg src={PurServiceImg}/>
            <StyledServicesItemTitle>{langReducer.isPolish ? servicesSection4_PL : servicesSection4_DE}</StyledServicesItemTitle>
            <StyledServicedItemDescription>{langReducer.isPolish ? servicesSectionDescription4_PL : servicesSectionDescription4_DE}</StyledServicedItemDescription>
            <Button to={'/isolation'}>{langReducer.isPolish ? servicesSectionButton_PL : servicesSectionButton_DE}</Button>
          </StyledServicesSectionItem>

        </StyledServicesItemsContainer>
      </StyledServicesSectionContainer>
    </>
  )
}

const mapStateToProps = ({ langReducer }) => {
  return { langReducer }
}

export default connect(mapStateToProps)(ServicesSection)
