<style lang="less" scoped>
  #register {
    font-size: 0;
    width: 100%;
    padding: .84rem 0 0 0;
    box-sizing: border-box;
    position: relative;
    .logo {
      width: 1.75rem;
      height: .56rem;
    }
    .form {
      margin: .5rem .5rem 0 .5rem;
      .phone, .graphVerify, .password {
        display: table;
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        text-align: left;
        .box {
          display: table-cell;
          vertical-align: middle;
          .code {
            display: inline-block;
            color: #3A3F3A;
            font-size: .15rem;
            height: .4rem;
            line-height: .4rem;
            padding: 0 .05rem 0 0;
            vertical-align: middle;
            position: relative;
            &:before {
              content: '';
              width: .01rem;
              height: .15rem;
              background: #3F86F7;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              margin: auto 0;
            }
          }
          .telephone {
            flex: 1;
            border: none;
            height: .4rem;
            line-height: .4rem;
            padding: 0 0 0 .05rem;
            vertical-align: middle;
          }
        }
        .graphCode {
          width: 100%;
          margin: .2rem 0 0 0;
          position: relative;
          input {
            width: 100%;
            height: .4rem;
            line-height: .4rem;
            border: none;
          }
          img {
            width: .86rem;
            height: .32rem;
            position: absolute;
            right: 0;
            bottom: .09rem;
          }
        }
      }
      .getVerify {
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        margin: .2rem 0 0 0;
        text-align: left;
        position: relative;
        &:after {
          content: '';
          width: 1.8rem;
          height: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          border-bottom: 1px solid #BFC0C3;
          transform: scaleY(.5);
          transform-origin: 0 0;
          -webkit-transform: scaleY(.5);
          -webkit-transform-origin: 0 0;
        }
        input {
          border:none;
          border-radius: 0;
          width: 1.8rem;
          height: .4rem;
          line-height: .4rem;
        }
        span {
          color: #fff;
          font-size: .13rem;
          width: .86rem;
          height: .32rem;
          line-height: .32rem;
          text-align: center;
          border-radius: 4px;
          background: #f85336;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      .password {
        margin: .25rem 0 .15rem 0;
        input {
          width: 100%;
          border: none;
        }
      }
      .forgetPassword {
        color: #3F86F7;
        font-size: .11rem;
        height: .16rem;
        line-height: .16rem;
        text-align: right;
      }
    }
    .submit {
      color: #fff;
      font-size: .15rem;
      font-weight: bold;
      letter-spacing: .02rem;
      height: .44rem;
      line-height: .44rem;
      margin: .3rem .5rem 0;
      text-align: center;
      border-radius: .22rem;
      background: #f7923c;
    }
    .tips{
      width: 100%;
      height: .16rem;
      margin: .15rem 0 0 0;
      i {
        display: inline-block;
        width: .12rem;
        height: .12rem;
        margin: 0 .02rem 0 0;
        background-image: url('../../assets/images/icon/icon_select.png');
        background-size: 100% 100%;
        vertical-align: middle;
      }
      span {
        color: #7E817E;
        font-size: .11rem;
        vertical-align: middle;
        &.color {
          color: #3F86F7;
        }
      }
    }
    .footer {
      color: #7E817E;
      font-size: .13rem;
      height: .15rem;
      line-height: .15rem;
      padding: .8rem 0 .3rem 0;
      span {
        display: inline-block;
        &.color {
          color: #F7923C;
        }
      }
      i {
        display: inline-block;
        width: .13rem;
        height: .13rem;
        vertical-align: top;
        background-image: url('../../assets/images/icon/more.png');
        background-size: 100% 100%;
      }
    }
  }
</style>

<template>
  <div id="register">
    <img src="../../assets/images/logo.png" class="logo">
    <div class="form">
      <div class="phone bor-1px-b">
        <div class="box">
          <span class="code">156</span>
          <input class="telephone" type="text" v-model="formData.telephone" placeholder="请输入手机号">
        </div>
      </div>
      <div class="password bor-1px-b">
        <input type="text" v-model="formData.password" placeholder="请输入登录密码">
      </div>
      <div class="password bor-1px-b">
        <input type="text" v-model="formData.password" placeholder="请确认登录密码">
      </div>
      <div class="graphVerify bor-1px-b">
        <div class="graphCode">
          <input type="text" v-model="formData.password" placeholder="请输入图形验证码">
          <img src="../../assets/images/icon/icon_code.png">
        </div>
      </div>
      <div class="getVerify">
        <input class="messageCode" type="text" v-model="formData.password" placeholder="请输入短信验证码">
        <span>发送验证码</span>
      </div>
    </div>
    <div class="submit">登录</div>
    <div class="tips">
      <i /><span>本人已阅读并同意</span><span class="color">《集成保险服务协议》</span>
    </div>
    <div class="footer">
      <span>已有账号?</span> <span class="color" @click="loginFunc">马上登录</span><i />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      formData: {
        telephone: '',
        password: ''
      }
    }
  },
  methods: {
    loginFunc () {
      this.$router.push({
        path: '/loginIndex'
      })
    }
  }
}
</script>
