import React from 'react'
import PropTypes from 'prop-types'
import './Results.css'

const Results = ({ median, getResultText }) => {
  if (!median) return null

  return (
    <div className="result-wrapper">
      {getResultText()}
      <h1 className="prime-result">{median.toString()}</h1>
    </div>
  )
}

Results.defaultProps = {
  median: null
}

Results.propTypes = {
  median: PropTypes.arrayOf(PropTypes.number),
  getResultText: PropTypes.func.isRequired
}

export default Results
