import axios from 'axios'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_BACK_PORT}`,
  withCredentials: true
})