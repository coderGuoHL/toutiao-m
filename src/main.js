import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'

import './styles/index.less'
import 'vant/lib/index.css'
// 动态设置 rem 基准值
import 'amfe-flexible'

createApp(App).use(store).use(router).use(Vant).mount('#app')
