import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '10px 36px' : '8px 24px')};
  color: ${({dark}) => (dark ? '#0101606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '18px' : '14px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
  }
`;