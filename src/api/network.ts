import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'

const network: Axios = axios.create({
  baseURL: '',
  timeout: 1000 * 60 * 2,
  // Request Timing
  withCredentials: true,          // Support Cors Cookie
})

// response interceptor
network.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res instanceof Blob) {
      return res
    }

    // login expired redirect to login page
    if (res.code === 401) {
      const navigate = useNavigate()
      navigate('/login')
      return
    }

    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default network as any

