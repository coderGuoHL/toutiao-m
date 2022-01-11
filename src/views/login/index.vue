<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar" title="登录" />
    <van-form>
      <van-cell-group inset>
        <van-field  v-model="phoneNo" name="手机号"  placeholder="请输入手机号">\
          <template v-slot:left-icon>
            <i class="toutiao toutiao-shouji"></i>
          </template>
        </van-field>
        <van-field v-model="verCode" name="验证码" placeholder="请输入验证码">
          <template v-slot:left-icon>
            <i class="toutiao toutiao-yanzhengma"></i>
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      phoneNo: '',
      verCode: ''
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {}
}

</script>
<style lang="less">
.page-nav-bar {
    background-color: #3197fb;
    .van-nav-bar__title {
        color: #fff;
    }
}

.login-container {
  .toutiao {
    font-size: 37px;
  }
}
</style>
