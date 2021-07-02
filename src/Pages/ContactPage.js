import React, { useEffect, useState } from "react"
import NavBar from "../Components/Molecules/NavBar/NavBar"
import Footer from "../Components/Molecules/Footer/Footer"
import SideBar from "../Components/Molecules/SideBar/SideBar"
import MapItem from "../Components/Molecules/MapItem/MapItem"

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <MapItem/>
    </>
  );
};

export default ContactPage;
