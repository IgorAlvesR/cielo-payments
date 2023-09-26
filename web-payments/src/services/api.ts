import axios from 'axios'

export function getInstanceHttpClient() {
  let instance
  if (!instance) {
    instance = axios.create({ baseURL: import.meta.env.VITE_API_URL })
  }

  return instance
}
