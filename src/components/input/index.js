import React from 'react'
import { func, string } from 'prop-types'

export const Input = ({ title, onChange, onBlur, onClick }) => (
  <>
    <h3>{title}</h3>
    <input type="text" onChange={onChange} onBlur={onBlur} />
    <button onClick={onClick}>Submit</button>
  </>
)

Input.propTypes = {
  title: string,
  onChange: func,
  onBlur: func,
  onClick: func
}

export default Input
