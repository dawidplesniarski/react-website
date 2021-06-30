import React, {useState} from 'react'
import NavBar from "../Components/Molecules/NavBar/NavBar"
import SideBar from "../Components/Molecules/SideBar/SideBar"

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
    </>
  );
};

export default MainPage;
