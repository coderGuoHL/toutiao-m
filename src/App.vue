<template>
  <div id="app">
    <h1>Cdeo头条</h1>
    <!-- 路由的入口 -->
    <router-view/>

    <div>
      <i class="toutiao toutiao-wuwangluo"></i>
    </div>
    <div>111</div>

    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model:show="show">内容</van-popup>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'app',
  setup () {
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    return {
      show,
      showPopup
    }
  }
}
</script>

<style lang="less">

</style>
