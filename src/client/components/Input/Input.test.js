import React from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'

const mockProps = {
  value: 'Test',
  handleInputChange: jest.fn()
}

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Input {...mockProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
