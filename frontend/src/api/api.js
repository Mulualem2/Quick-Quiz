import axios from 'axios'
axios.defaults.withCredentials = true
const baseURL = 'http://localhost:4000/'

const api = axios.create({
    baseURL: baseURL,
    withCredentials: true, 
    credentials: 'include',
})

export default api