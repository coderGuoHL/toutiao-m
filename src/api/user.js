/**
 * 封装用户相关的请求
 */
export const login = data => {
  const { mobile, code } = data || {}
  const response = {}
  if (mobile === '15274799830' && code === '123456') {
    setTimeout(50000)
    console.log('登录成功')
    response.errorCode = 0
    response.token = '123123'
    return response
  } else {
    setTimeout(50000)
    const errorMsg = { errorCode: 400, errorMsg: '验证码错误' }
    throw errorMsg
  }
}
