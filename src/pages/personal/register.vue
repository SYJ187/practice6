<template>
  <div class="register">
    <div class="register-icon">
        <i class="iconfont icon-personal"></i>
    </div>
    <div class="register-list">
        <h3>注册</h3>
        <h3 class="dis">|</h3>
        <h3>登录</h3>
    </div>
</div>
</template>

<script>

  export default {
    name: 'PersonalRegister'
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .register{
      height: 174px;
      background-color: $header-bgc;
      .register-icon{
          padding-top: 50px;
          @include flex-center();
      }
      .iconfont{
          display: block;
          height: 68px;
          width: 68px;
          border-radius: 50%;
          background-color: #fff;
          color:  $header-bgc;
          line-height: 68px;
          text-align: center;
          font-size: 50px;
      }
      .register-list{
        font-size: 20px;
        color: #fff;
        padding-top: 14px;
        @include flex-center();
        .dis{
          margin: 0 30px;
        }
      }
  }

</style>
