import React, { useEffect, useState } from "react"
import NavBar from "../Components/Molecules/NavBar/NavBar"
import Footer from "../Components/Molecules/Footer/Footer"
import SideBar from "../Components/Molecules/SideBar/SideBar"
import MapItem from "../Components/Molecules/MapItem/MapItem"
import {
  ContactPageDescriptionContainer,
  ContactPageDescriptionH1, ContactPageDescriptionH2, ContactPageDescriptionParagraph, ContactPageDescriptionWrapper
} from "../Components/Molecules/MapItem/MapItem.styles"
import EmailForm from "../Components/Molecules/EmailForm/EmailForm"
import { connect } from "react-redux"
import {
  contactPageDescription_DE,
  contactPageDescription_PL,
  contactPageTitle_DE,
  contactPageTitle_PL
} from "../Utils/dictionary"

const ContactPage = ({ langReducer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <ContactPageDescriptionWrapper>
        <ContactPageDescriptionContainer>
          <ContactPageDescriptionH1>{langReducer.isPolish ? contactPageTitle_PL : contactPageTitle_DE}</ContactPageDescriptionH1>
          <ContactPageDescriptionParagraph>{langReducer.isPolish ? contactPageDescription_PL : contactPageDescription_DE}</ContactPageDescriptionParagraph>
          <ContactPageDescriptionH2>+43 699 10855287</ContactPageDescriptionH2>
          <ContactPageDescriptionH2>piotr.tyka@gmail.com</ContactPageDescriptionH2>
        </ContactPageDescriptionContainer>
      </ContactPageDescriptionWrapper>
      <MapItem/>
      <EmailForm/>
      <Footer/>
    </>
  )
}

const mapStateToProps = ({ langReducer }) => {
  return { langReducer }
}

export default connect(mapStateToProps)(ContactPage)
