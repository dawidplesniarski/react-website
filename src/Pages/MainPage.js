import React, {useState} from 'react'
import NavBar from "../Components/Molecules/NavBar/NavBar"
import SideBar from "../Components/Molecules/SideBar/SideBar"
import HeroSection from "../Components/Molecules/HeroSection/HeroSection"
import ServicesSection from "../Components/Molecules/ServicesSection/ServicesSection"
import Footer from "../Components/Molecules/Footer/Footer"
import {connect} from "react-redux";
const MainPage = ({langReducer}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <HeroSection/>
      <ServicesSection/>
      <Footer/>
    </>
  );
};

const mapStateToProps = ({langReducer}) => {
  return {langReducer};
}

export default connect(mapStateToProps)(MainPage);
