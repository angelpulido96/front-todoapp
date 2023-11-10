import axios, { AxiosError, AxiosInstance } from 'axios'
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import Router from 'next/router';
import { authorizatonAPI } from './authorization.api';

type MyErrorResponse = {
  errors: { detail: string }[]
}

const onRequest = async (config: any) => {
  return config
}

const onRequestError = (error: any) => {
  return Promise.reject(error)
}

const onResponse = (response: any) => {
  return response
}

const onResponseError = async (error: AxiosError<MyErrorResponse>): Promise<AxiosError> => {
  const token = getCookie('authorization')
  const refreshToken = getCookie('refreshToken')
  if (error.response?.status === 401) {
    const request = await authorizatonAPI.refreshToken({ token, refreshToken })
    setCookie('authorization', request.data.accessToken)
    Router.reload()
  } else {
    deleteCookie('authorization')
    deleteCookie('refreshToken')
    Router.push('/login')
  }
  return Promise.reject(error)
}

export const setupInterceptorsTo = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}