import React, { useState } from "react"
import SideBar from "../../Components/Molecules/SideBar/SideBar"
import NavBar from "../../Components/Molecules/NavBar/NavBar"
import { connect } from "react-redux"
import Footer from "../../Components/Molecules/Footer/Footer"
import BathRoomGallery from "../../Components/Molecules/ServicesGallery/BathRoomGallery"

const BathRoomPage = ({langReducer}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <BathRoomGallery/>
      <Footer/>
    </>
  );
};

const mapStateToProps = ({langReducer}) => {
  return {langReducer};
}

export default connect(mapStateToProps)(BathRoomPage);