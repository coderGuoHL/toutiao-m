# 基于Vue开发明日头条

### 一、项目初始化

#### 1.使用Vue CLI创建项目

使用eslint严格模式后校验遇到的问题：

最后一行不需要＋逗号

```
Unexpected trailing comma  comma-dangle
```

项目中默认使用单引号

```
Strings must use singlequote
```



#### 2.加入git版本管理



#### 3.调整初始化目录结构



#### 4.导入图标素材



#### 5.引入vant组件库

中文文档：https://vant-contrib.gitee.io/vant/#/zh-CN/

github 地址：[https://github.com/youzan/vant](javascript:void(0))



按需引入：单独引入组件，打包时会将引入的组件单独打包，而不是将整个组件库打包



引入出现的问题：

1.强制使代码必须使用分号（ ; ），或者必须不能加（ ; ）

引入的样式 结尾不能使用；

```
Extra semicolon (semi)
```



2.空行不允许超过一个

```
More than 1 blank line not allowed  no-multiple-empty-lines
```



#### 6.移动REM适配

Vant中默认使用`px`作为单位，如果需要使用`rem`单位，推荐使用以下两个工具

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值





### 二、登录注册

#### 1、准备

#### 1.1 创建组件并配置路由

#### 1.2 布局结构

注意vue3中使用v-slot

```vue
 <template v-slot:left-icon>
 	<i class="toutiao toutiao-yanzhengma"></i>
 </template>
```



#### 1.3 布局样式



vscode配置vue的模板

```json
{
  "Print to console": {
    "prefix": "vue",
    "body": [
      "<template>",
      "  <div class=''></div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name: '$0',",
      "  data () {",
      "    return {",
      "    }",
      "  },",
      "",
      "  components: {},",
      "",
      "  computed: {},",
      "",
      "  mounted: {},",
      "",
      "  methods: {}",
      "}",
      "",
      "</script>",
      "<style lang='scss' scoped>",
      "</style>\n"
  ],
    "description": "Log output to console"
  }
}
```



#### 2、基本实现登录功能



#### 3、登录状态提示



#### 4、表单验证



#### 5、验证码处理



#### 6、处理用户token

- 登录成功，将Token存储到Vuex容器中
  - 获取方便
  - 响应式
- 为了持久化，还需要把token存储到本地存储中
  - 持久化

