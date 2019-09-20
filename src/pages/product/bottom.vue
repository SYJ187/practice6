<template>
    <div class="bottom">
          <div class="bottom-s">
            <i class="iconfont icon-shop"></i>
            <span>店铺</span>
          </div>
          <div class="bottom-s">
            <i class="iconfont icon-service"></i>
            <span>客服</span>
          </div>
          <div class="bottom-s">
            <i class="iconfont icon-collect"></i>
            <span>收藏</span>
          </div>
          <div class="bottom-l cart">加入购物车</div>
          <div class="bottom-l buy">马上抢</div>

    </div>
</template>

<script>
  export default {
    name: 'ProductBottom'
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .bottom{
    background: #f5f5f5;
    height: $tabbar-height;
    width: 100%;
    @include flex-center();

    &-s{
      @include flex-center(column);
      width: 13.333%;
      i{
        margin-bottom: 5px;
        font-size: $icon-font-size;
      }
    }
    &-l{
      width: 30%;
      @include flex-center();
    }

    .cart{
      background: #ff9500;
      height: 100%;
      color: #fff;
    }
    .buy{
      background: #ff0036;
      height: 100%;
      color: #fff;
    }
  }

</style>
