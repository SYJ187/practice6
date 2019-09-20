<template>
    <me-navbar class="header">
      <div class="left" slot="left"></div>
      <div slot="center" class="title">我的慕淘</div>
      <i class="iconfont icon-setting" slot="right"></i>
      <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'PersonalHeader',
    components: {
      'me-navbar': MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .header{
    &.mine-navbar{
      background-color: $header-bgc-translucent;
    }
    .left{
        width: 58px;
    }
    .iconfont{
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
    .iconfont:first-child{
        margin-right: 10px;
    }
    .title{
      font-size: 15px;
      color: #fff;
      text-align: center;
    }
  }

</style>
