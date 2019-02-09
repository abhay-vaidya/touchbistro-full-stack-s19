import React, { Component } from 'react'
import axios from 'axios'
import Input from './components/Input/Input'
import Results from './components/Results/Results'
import ErrorBanner from './components/ErrorBanner/ErrorBanner'
import './App.css'

export default class App extends Component {
  state = {
    value: '',
    median: null,
    error: null
  }

  getMedianPrimes = (e) => {
    e.preventDefault()
    const { value } = this.state
    axios
      .get(`/api/median-prime?limit=${value}`)
      .then((response) => {
        this.setState({ median: response.data.medianPrime, error: null })
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          this.setState({ median: null, error: error.response.data.message })
        } else {
          this.setState({ median: null, error: 'Oops, something went wrong! Try again later.' })
        }
      })
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
        <h1>Median Prime</h1>
        <div className="subtitle-wrapper">
          <h2>TouchBistro Full Stack Challenge, Summer 2019</h2>
          <h4 className="name">Abhay Vaidya</h4>
        </div>
        <h3>
          Enter an upper limit to find the median prime number(s) of the set of prime numbers less
          than your number. This is done using the &nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"
          >
            Sieve of Eratosthenes
          </a>
          &nbsp; algorithm!
        </h3>
        <ErrorBanner error={error} />
        <form onSubmit={this.getMedianPrimes}>
          <Input value={value} handleInputChange={this.handleInputChange} />
        </form>
        <Results median={median} getResultText={this.getResultText} />
      </div>
    )
  }
}
