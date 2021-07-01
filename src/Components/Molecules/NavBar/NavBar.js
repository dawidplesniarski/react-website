import React from "react"
import { FaBars } from "react-icons/fa"
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBarLogo } from "./NavBar.styles"
import Logo from "../../../Assets/AppImages/logo.png"

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to={"/"}>
            <NavBarLogo src={Logo}/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to={"ServicesSection"}>
                Strona główna
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/about"}>
                O nas
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/contact"}>
                Kontakt
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/discover"}>
                Usługi
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default NavBar
