import axios from 'axios'

const baseURL = 'https://the-trivia-api.com/api/'

const triviaApi = axios.create({
    baseURL: baseURL,
})

export default triviaApi