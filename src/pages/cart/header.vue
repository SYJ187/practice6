<template>
    <me-navbar class="header">
      <div class="left" slot="left"></div>
      <div slot="center" class="title">购物车</div>
      <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'CartHeader',
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
        width: 24px;
    }
    .iconfont{
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
    .title{
      font-size: 15px;
      color: #fff;
      text-align: center;
    }
  }

</style>
