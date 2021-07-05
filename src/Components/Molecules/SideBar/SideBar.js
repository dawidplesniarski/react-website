import React from "react"
import { CloseIcon, Icon, SideBarContainer, SideBarLink, SideBarMenu, SideBarWrapper } from "./SideBar.styles"
import { connect } from "react-redux"
import LangButton from "../../Atoms/LangButton/LangButton"
import { setLanguage } from "../../../Actions/langActions"

const SideBar = ({ isOpen, toggle, langReducer, setLanguage }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to={"/"}>
            {langReducer.isPolish ? 'Strona główna' : 'Home'}
          </SideBarLink>
          <SideBarLink to={"/about"}>
            {langReducer.isPolish ? 'O nas' : 'Über uns'}
          </SideBarLink>
          <SideBarLink to={"/discover"}>
            Discover
          </SideBarLink>
          <SideBarLink to={"/contact"}>
            Contact
          </SideBarLink>
          <LangButton isPolish={langReducer.isPolish} onClick={() => setLanguage(!langReducer.isPolish)}/>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

const mapStateToProps = ({ langReducer }) => {
  return { langReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (isPolish) => dispatch(setLanguage(isPolish))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
