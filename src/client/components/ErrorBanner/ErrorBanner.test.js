import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBanner from './ErrorBanner'

const mockProps = {
  error: 'Test'
}

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ErrorBanner {...mockProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
