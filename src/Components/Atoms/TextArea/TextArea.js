import React from 'react'
import PropTypes from "prop-types"
import Input from "../Input/Input"
import { StyledTextArea } from "./TextArea.styles"

const TextArea = ({type, name, onChange, placeholder, rows, maxLength}) => {
  return(
    <>
      <StyledTextArea type={type} name={name} onChange={onChange} placeholder={placeholder} rows={rows} maxLength={maxLength}/>
    </>
  );
};

export default TextArea;
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
