import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

export const Button = styled(Link)`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  padding: 8px 24px;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${({ disabled }) =>
  !disabled &&
  css`
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    `}
    }
  
  ${({ disabled }) =>
  disabled &&
  css`
      opacity: 40%;
    `}
`
