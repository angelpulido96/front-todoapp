import axios, { AxiosInstance } from 'axios'

const onRequest = async (config: any) => {
    return config
}

const onRequestError = (error: any) => {
    return Promise.reject(error)
}

const onResponse = (response: any) => {
    return response
}

const onResponseError = async (error: any) => {
    return Promise.reject(error)
}

export const setupInterceptorsTo = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError)
    axiosInstance.interceptors.response.use(onResponse, onResponseError)
    return axiosInstance
}