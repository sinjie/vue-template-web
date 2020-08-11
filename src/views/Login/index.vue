<template>
  <div class="login-page">
    <div class="content">
      <div class="content__img">
        <img class="content__img_img" :src="imgUrl" alt="">
      </div>
      <div class="content__form-content">
        <div class="content__title text-center">
          欢迎登录
        </div>
        <el-form :model="loginForm">
          <el-form-item label="账号" prop="username">
            <el-input v-model="loginForm.username" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item label="手机验证" prop="validNumber">
            <el-input v-model="loginForm.validNumber" placeholder="验证码">
              <el-button v-if="!sended" slot="append" @click="openJY" type="text">发送验证码</el-button>
              <span v-if="sended" slot="append">剩余{{count}}S</span>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="content__submit">
          <el-button class="content__submit-btn" type="primary" @click="login">登录</el-button>
        </div>
        <div class="footer-line text-right">
          <el-button type="text" size="mini">忘记密码</el-button>
          <el-button type="text" size="mini">注册账号</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      imgUrl: require('../../assets/images/login_bg_1.png'),
      sended: false,
      loginForm: {},
      count: 60
    }
  },
  created() {},
  methods: {
    login() {
      // 校验通过——定时器模拟登录接口调用
      setTimeout(() => {
        // 登录成功调用本地存储登录信息
        let data = {
          token: '123456',
          userInfo: {
            username: '13819855293',
            userid: 1,
            name: 'yexiangmin'
          }
        }

        this.$store.dispatch('Login', data).then(res => {
          this.$router.replace('/index')
        }).catch(msg => {
          this.$message.error(msg)
        })
      }, 100);
    },
    openJY() {
      this._confirm('极验校验').then(res => {
        this.sended = true
        this.count = 60
        setInterval(() => {
          this.count--
          if (this.count === 0) {
            this.sended = false
          }
        }, 1000);
      }).catch(e => {})
    },
  }
}
</script>
<style lang='scss' scoped>
.login-page {
  height: calc(100vh - 60px);
  @include bg_color('bg_color_base');

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;

    .content__img {
      width: 400px;

      .content__img_img {
        width: 100%;
      }
    }

    .content__form-content {
      width: 460px;
      padding: 40px 60px;
      border-radius: 0 8px 8px 0;
      background: $--color-white;
      box-shadow: 0 0 10px 0 rgba(11,12,13,.3);

      .content__title {
        color: $--color-black;
        font-size: 30px;
        padding: 10px 20px;
        letter-spacing: 8px;
      }

      .content__submit {
        padding-top: 10px;

        .content__submit-btn {
          width: 100%;
          letter-spacing: 1em;
        }
      }
    }
  }
}
</style>