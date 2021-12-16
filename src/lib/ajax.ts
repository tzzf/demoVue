import axios from 'axios'
import Vue from 'vue'
import { ResponseData, AjaxParams } from '@/types/index'

export default function ajax (api: AjaxParams) {
  // api地址
  const url: any = `${api.api}`
  return new Promise((resolve, reject) => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') || ''
      },
      method: api.method || 'get',
      url,
      [api.method === 'get' ? 'params' : 'data']: api.data
    })
      .then(response => response.data)
      .then((data: ResponseData) => {
        if (data.api_code === 200) {
          resolve(data)
        } else if (data.api_code === 598 || data.api_code === 501 || data.api_code === 502 || data.api_code === 504 || data.api_code === 505) {
          // 重新登录处理
          localStorage.remove('token')
        } else {
          reject(data)
          console.error(data)
        }
      })
      .catch(error => {
        const { response } = error
        if (!response) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({})
          return false
        }
        const { data } = response
        if (data.api_code === 598 || data.api_code === 501 || data.api_code === 502 || data.api_code === 504 || data.api_code === 505) {
          localStorage.remove('token')
        }
        reject(data)
      })
  })
}
