import express from 'express'
import cors from 'cors'
import { getPrimeNumbers, getArrayMedian } from './utils/prime.utils'
import { isLimitValid } from './utils/validation.utils'

const app = express()
const port = 8080

app.use(cors())

app.get('/api/median-prime', (req, res) => {
  const limitString = req.query.limit
  if (isLimitValid(limitString)) {
    const limit = parseInt(limitString, 10)
    const primeNumbers = getPrimeNumbers(limit)
    const medianPrime = getArrayMedian(primeNumbers)
    res.send({ medianPrime })
  } else {
    res.status(400)
    res.send({ message: 'Try sending a single, valid number! No letters or special characters.' })
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
