import axios from 'axios'
export function request(config) {
  const instance = new axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000
  })
  return instance(config)
}