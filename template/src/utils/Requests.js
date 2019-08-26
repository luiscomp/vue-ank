import axios from 'axios'
import Vue from 'vue'
import { store } from '../main'

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

axiosRequest.interceptors.request.use(config => {
    if (seLogado() || config.url === 'Usuario/AutenticarAcesso') {
        return config
    } else {
        reiniciarAplicacao()
    }
}, error => error)

axiosRequest.interceptors.response.use(response => response, error => {
    const status = error.response ? error.response.status : null

    if (status === 401) {
        return store.dispatch('loginStore/reautenticar').then(() => {
            return axiosRequest.request(error.config)
        }).catch(() => {
            reiniciarAplicacao()
        })
    }

    return Promise.reject(error)
})

function seLogado() {
    return Vue.$storage.get('usuario') !== null
}

function reiniciarAplicacao() {
    window.location.href = '/'
    Vue.$storage.clear()
}
