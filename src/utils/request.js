/**
 * axios 配置
 */

import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'
import { getToken, removeToken } from '@/utils/auth'

// create an axios instance 
const service = axios.create({
  baseURL: `${window.env.url}/admin`,
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 41001) {
      Message({
        message: '请先登录',
        type: 'error',
        duration: 3 * 1000
      })
      store.dispatch('Logout')
      router.push('/login')
      return
    }
    if (res.code === 200) {
      return res
    } else {
      Message({
        message: res.msg || '操作失败',
        type: 'error',
        duration: 3 * 1000
      })
    }
    return Promise.reject(res.msg || '操作失败')
  }, error => {
    console.log('err' + error)// for debug
    Message({
      message: '数据获取失败，请联系客服',
      type: 'error',
      duration: 3 * 1000
    })
    // router.push('/login')
    return Promise.reject(error)
  })

export default service
