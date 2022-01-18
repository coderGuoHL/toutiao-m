/**
 * 封装session数据操作模块
 * 此模块将操作session缓存简化
 */
/**
 * 添加数据
 * 向浏览器缓存中添加数据，浏览器对象只能存储 value-String 的item
 * 此处需要注意若是对对象或者数组则需要转化为JSON字符串存储
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 删除数据
 * 向浏览器缓存中根据key删除数据
 */
export const removeItem = key => {
  window.localStorage.removeItem(key)
}

/**
 * 获取数据
 * 向浏览器缓存中获取数据
 * 此处不判断 获取到的数据是否为JSON字符串，
 * 若不是字符串，parse转换报错抛出异常说明数据不是对象，因此直接返回data即可
 */
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
