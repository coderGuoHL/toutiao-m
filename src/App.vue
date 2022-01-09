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
    <div class="box">hello world</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
.box {
  width: 750px;
  height: 200px;
  background-color: pink;
}
</style>
