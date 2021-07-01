import React from "react"
import { CloseIcon, Icon, SideBarContainer, SideBarLink, SideBarMenu, SideBarWrapper } from "./SideBar.styles"

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to={"/"}>
            Strona główna
          </SideBarLink>
          <SideBarLink to={"/about"}>
            About
          </SideBarLink>
          <SideBarLink to={"/discover"}>
            Discover
          </SideBarLink>
          <SideBarLink to={"/contact"}>
            Contact
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
