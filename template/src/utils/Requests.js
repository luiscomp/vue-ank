import axios from 'axios'

const URL_BASE = 'http://localhost:8080/'

export const axiosRequest = axios.create({
    baseURL: URL_BASE,
    timeout: 30000,
    maxContentLength: 5242880,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

axiosRequest.interceptors.response.use(function(response) {
    return response
}, function(error) {
    if (error.toString().includes('status code 401')) {
        window.location.href = 'login'
    }
    return Promise.reject(error)
})
