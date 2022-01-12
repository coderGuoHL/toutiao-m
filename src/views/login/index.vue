<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar" title="登录" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field  v-model="user.mobile" name="phoneNo"  placeholder="请输入手机号">\
          <template v-slot:left-icon>
            <i class="toutiao toutiao-shouji"></i>
          </template>
        </van-field>
        <van-field v-model="user.code" name="verCode" placeholder="请输入验证码">
          <template v-slot:left-icon>
            <i class="toutiao toutiao-yanzhengma"></i>
          </template>
          |
          <template #button>
            <van-button round class="send-sms-btn" size="mini" type="default">发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <div class="login-btn-wrap">
        <van-button round block class="login-btn" type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'login',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '15274799830',
        code: '123456'
      }
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  methods: {
    async onSubmit () {
      // 获取表单数据
      const user = this.user
      console.log(this.user)

      // 表单请求
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: '倒计时 3 秒'
      })

      // 提交表单请求登录
      try {
        const res = await login(user)
        console.log('登录成功', res)
        this.$toast.success('登录成功')
      } catch (error) {
        if (error.errorCode === 400) {
          console.log(error.errorMsg)
        } else {
          console.log('系统错误，请联系管理员')
        }
      }

      // 根据响应结果处理后续
    }
  }
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
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    font-size: 22px;
    color: #666;
    background-color: #efefef;
  }
}
.login-btn-wrap {
  padding: 53px 33px;
  .login-btn {
    background-color: #6db3fb;
    border: none;
  }
}
</style>
