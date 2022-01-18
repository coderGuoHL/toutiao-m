import { createStore } from 'vuex'
import { setItem, getItem } from '@/utils/storage'

const TOKEN_KEY = 'toutiao-user'

export default createStore({
  state: {
    // 定义一个user用来存储user相关的数据
    user: getItem(TOKEN_KEY)
  },
  mutations: {
    setUser (state, data) {
      console.log(data)
      state.user = data

      // 把数据存入session中, 注意值对应的必须是字符串 因此需要调用json包转字符串
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
      setItem(TOKEN_KEY, data)
    }
  },
  actions: {
  },
  modules: {
  }
})
