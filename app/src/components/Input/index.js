import React from 'react'
import PropTypes from 'prop-types'

// Styled
import { InputWrapper } from './styled'

const Input = ({ name, value, placeholder, onChange }) => (
  <InputWrapper
    type="text"
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input
