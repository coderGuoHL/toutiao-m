/**
 * 封装用户相关的请求
 */
import request from '@/utils/request'

export const login = data => {
  request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}
