import axios from 'axios'

const baseURL = 'https://the-trivia-api.com/api/'

const triviaApi = axios.create({
    baseURL: baseURL,
    withCredentials: false,
})

export default triviaApi