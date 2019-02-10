import React, { Component } from 'react'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Results from './components/Results/Results'
import ErrorBanner from './components/ErrorBanner/ErrorBanner'
import { getMedianPrime } from './services/prime.service'
import './App.css'

export default class App extends Component {
  state = {
    value: '',
    median: null,
    error: null
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { value } = this.state
    let median = null
    let error = null

    try {
      median = await getMedianPrime(value)
    } catch (serviceError) {
      error = 'Oops, something went wrong! Try again later'
      if (serviceError.response && serviceError.response.data.message) {
        error = serviceError.response.data.message
      }
    }
    this.setState({ median, error })
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value })
  }

  getResultText = () => {
    const { median } = this.state
    switch (median.length) {
      case 0:
        return 'There are no primes less than your number!'
      case 1:
        return 'The median prime is...'
      default:
        return 'The median primes are...'
    }
  }

  render() {
    const { value, median, error } = this.state
    return (
      <div className="app-wrapper">
        <Header />
        <ErrorBanner error={error} />
        <form onSubmit={this.handleSubmit}>
          <Input value={value} handleInputChange={this.handleInputChange} />
        </form>
        <Results median={median} getResultText={this.getResultText} />
      </div>
    )
  }
}
