import React from "react"
import { FaBars } from "react-icons/fa"
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from "./NavBarElements"

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to={"/"}>Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to={"/"}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/about"}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/contact"}>
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={"/discover"}>
                Discover
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default NavBar
