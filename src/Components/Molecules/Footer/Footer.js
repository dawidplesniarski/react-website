import React from "react"
import {
  StyledEmailIcon,
  StyledFooter,
  StyledFooterContainer,
  StyledFooterItem,
  StyledFooterItemRow,
  StyledHr,
  StyledPhoneIcon
} from "./Footer.styles"

const Footer = () => {
  return (
    <>
      <StyledHr/>
      <StyledFooter>
        <StyledFooterContainer>
          {/*First item*/}
          <StyledFooterItem>
            <StyledFooterItemRow>
              Tyka BAU GmbH
            </StyledFooterItemRow>
            <StyledFooterItemRow>
              Janis Joplin Promenade 4/16
            </StyledFooterItemRow>
            <StyledFooterItemRow>
              1020 Wien
            </StyledFooterItemRow>
          </StyledFooterItem>
          {/*Next Item*/}
          <StyledFooterItem>
            <StyledFooterItemRow>
              <StyledPhoneIcon/>
              <span>+43 699 10855287</span>
            </StyledFooterItemRow>
            <StyledFooterItemRow>
              <StyledPhoneIcon/>
              <span>+43 699 10855287</span>
            </StyledFooterItemRow>
            <StyledFooterItemRow>
              <StyledEmailIcon/>
              <a href={'piort.tyka@gmail.com'}>piotr.tyka@gmail.com</a>
            </StyledFooterItemRow>
          </StyledFooterItem>
        </StyledFooterContainer>
      </StyledFooter>
    </>
  )
}

export default Footer
