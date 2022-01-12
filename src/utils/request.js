// 封装请求 基于axios
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/'
})

// 请求拦截器

// 响应拦截器

export default request
