import React from "react"
import { FaBars } from "react-icons/fa"
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBarLogo,
  NavScroll
} from "./NavBar.styles"
import Logo from "../../../Assets/AppImages/logo.png"
import LangButton from "../../Atoms/LangButton/LangButton"
import { connect } from "react-redux"
import { setLanguage } from "../../../Actions/langActions"

const NavBar = ({ toggle, langReducer, setLanguage }) => {
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
              <NavLinks to={"/"}>
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
              <NavScroll to={"ServicesSection"}>
                Usługi
              </NavScroll>
            </NavItem>
            <NavItem>
              <LangButton isPolish={langReducer.isPolish} onClick={() => setLanguage(!langReducer.isPolish)}/>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  )
}

const mapStateToProps = ({langReducer}) => {
  return {langReducer};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (isPolish) => dispatch(setLanguage(isPolish))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
