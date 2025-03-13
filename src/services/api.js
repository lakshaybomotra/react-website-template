import axios from 'axios'
import store from '../store'
import { logout } from '../store/slices/authSlice'
import { toast } from '../utils/toast'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})

const getToken = () => {
  const storedAuth = localStorage.getItem('auth')
  return storedAuth ? JSON.parse(storedAuth).token : null
}

api.interceptors.request.use(
  (config) => {
    const token = getToken() || store.getState().auth.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status

    if (status === 401) {
      toast.error('Session expired. Please login again.')
      store.dispatch(logout())
      window.location.href = '/login'
    } else if (status === 500) {
      toast.error('Server error. Please try again later.')
    } else {
      toast.error(error?.response?.data?.message || 'An error occurred')
    }

    return Promise.reject(error)
  }
)

export default api
