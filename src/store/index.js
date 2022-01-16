import { createStore } from 'vuex'

export default createStore({
  state: {
    // 定义一个user用来存储user相关的数据
    user: null

  },
  mutations: {
    setUser (state, data) {
      console.log(data)
      state.user = data
    }
  },
  actions: {
  },
  modules: {
  }
})
