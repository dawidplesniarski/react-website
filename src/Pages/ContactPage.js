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

const ContactPage = () => {
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
          <ContactPageDescriptionH1>Jak możemy Ci pomóc?</ContactPageDescriptionH1>
          <ContactPageDescriptionParagraph>
            Jeśli masz jakieś pytania, zadzwoń, wyślij email lub skorzystaj z formularza. Działamy głównie w Krakowie oraz
            okolicznych miejscowościach, ale jesteśmy otwarci na realizację projektów związanych z remontami i
            wykończeniem wnętrz również w innych częściach kraju.
          </ContactPageDescriptionParagraph>
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

export default ContactPage
