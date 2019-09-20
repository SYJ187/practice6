<template>
    <me-navbar class="header">
      <i
      class="iconfont icon-back"
      slot="left"
      @click="goBack"
      ></i>
      <div slot="center" class="title">商品详情</div>
      <i
      class="iconfont icon-cart"
      slot="right"
      ></i>
    </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'ProductHeader',
    components: {
      'me-navbar': MeNavbar
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .header{
    &.mine-navbar{
      background-color: $header-bgc-translucent;
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
