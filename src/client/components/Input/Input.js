import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ value, handleInputChange }) => (
  <div className="input-wrapper">
    <input type="text" value={value} placeholder="e.g. 10" onChange={handleInputChange} />
    <button type="submit">GO!</button>
  </div>
)

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default Input
