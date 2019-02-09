const express = require('express')
const cors = require('cors')

const primeUtil = require('./utils/prime.utils')
const validationUtil = require('./utils/validation.utils')

const app = express()
const port = 8080

app.use(cors())

app.get('/api/median-prime', (req, res) => {
  const limitString = req.query.limit
  if (validationUtil.isLimitValid(limitString)) {
    const limit = parseInt(limitString, 10)
    const primeNumbers = primeUtil.getPrimeNumbers(limit)
    const medianPrime = primeUtil.getArrayMedian(primeNumbers)
    res.send({ medianPrime })
  } else {
    res.status(400)
    res.send({ message: 'Try sending a single, valid number! No letters or special characters.' })
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
