import React from 'react'

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

export default Input
