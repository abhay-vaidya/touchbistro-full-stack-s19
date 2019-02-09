import React from 'react'
import PropTypes from 'prop-types'
import './ErrorBanner.css'

const ErrorBanner = ({ error }) => {
  if (!error) return null

  return <div className="error-wrapper">{error}</div>
}

ErrorBanner.defaultProps = {
  error: null
}

ErrorBanner.propTypes = {
  error: PropTypes.string
}

export default ErrorBanner
