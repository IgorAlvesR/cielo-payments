import axios, { AxiosInstance } from 'axios'

let instance: AxiosInstance

export function getInstanceHttpClient() {
  if (!instance) {
    instance = axios.create({ baseURL: import.meta.env.VITE_API_URL })
  }
  return instance
}
