import React from "react";
import {StyledTextInput} from "./Input.styles";
import PropTypes from 'prop-types';

const Input = ({placeholder, onChange, type, min, max, step, value, defaultValue}) => {
  return (
    <StyledTextInput
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max}
      step={step}
      value={value}
      defaultValue={defaultValue}
    />
  )
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number
};


export default Input;
