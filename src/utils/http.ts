import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}

class Http {
  private static axiosInstance = axios.create(defaultConfig)
  constructor () {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  // 请求拦截
  private httpInterceptorsRequest () {
    Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, err => {
      return Promise.reject(err)
    })
  }

  // 响应拦截
  private httpInterceptorsResponse () {
    Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, err => {
      return Promise.reject(err)
    })
  }

  /**
   * 请求封装
   */
  public httpRequestGet<T> (url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.get(url, params).then(res => res.data).catch()
  }

  public httpRequestPost<T> (url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.post(url, params).then(res => res.data).catch()
  }
}

export const http = new Http()
