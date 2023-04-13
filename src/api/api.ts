import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { setupInterceptorsTo } from './interceptors'
import { Request } from '@/interfaces/request'
import Utils from '@/resources/Utils'


export const api = async (request: Request) => {
  try {
    const data = request.data ?? {}
    const filters = request.filters ? request.filters : ''
    const endpoint = request.endpoint || ''
    const url = 'http://localhost:3002/api/' + request.resource + endpoint + filters
    const headers = {
      'Content-Type': 'application/json',
      ...request.headers,
    } as AxiosRequestHeaders

    const options: AxiosRequestConfig = {
      method: request.method,
      url,
      data,
      headers,
    }

    const apiInstance = setupInterceptorsTo(axios.create())
    const response = await apiInstance(options)
    return response.data
  } catch (err: any) {
    return err.response.data
  }
}