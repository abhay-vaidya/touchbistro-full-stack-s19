import React from 'react'
import ReactDOM from 'react-dom'
import Results from './Results'

const mockProps = {
  median: [3],
  getResultText: jest.fn()
}

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Results {...mockProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
