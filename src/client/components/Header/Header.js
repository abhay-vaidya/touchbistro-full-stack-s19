import React from 'react'
import './Header.css'

const Header = () => (
  <div className="header-wrapper">
    <h1>Median Prime</h1>
    <div className="subtitle-wrapper">
      <h2 className="challenge-title">TouchBistro Full Stack Challenge, Summer 2019</h2>
      <h4 className="name">Abhay Vaidya</h4>
    </div>
    <h3 className="challenge-description">
      Enter an upper limit to find the median prime number(s) of the set of prime numbers less than
      your number. This is done using the &nbsp;
      <a
        className="external-link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"
      >
        Sieve of Eratosthenes
      </a>
      &nbsp; algorithm!
    </h3>
  </div>
)

export default Header
