import axios from 'axios'

export default function setHost() {
  axios.defaults.baseURL = 'http://api.easycash.ph'
}
