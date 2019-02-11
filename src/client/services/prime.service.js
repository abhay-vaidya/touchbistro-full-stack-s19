import axios from 'axios'

/* Given an upper limit, returns an object with the median and error
   If error occurs, median will be null and error will contain a message.
   If successful, median will be an array of numbers, and error will be null
*/
export function getMedianPrime(limit) {
  return axios.get(`/api/median-prime?limit=${limit}`).then(response => response.data.medianPrime)
}
