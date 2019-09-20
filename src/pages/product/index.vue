<template>
    <transition name="product" v-if="isShow">
      <div class="product">
        <header class="g-header-container">
          <product-header></product-header>
        </header>
        <me-loading v-if="!scores.length"></me-loading>
        <me-scroll :data="scores">
          <product-slider></product-slider>
          <product-message></product-message>
          <product-comment ></product-comment>
          <product-score @loaded="getScore"></product-score>
        </me-scroll>
        <div class="g-footer-container">
          <product-bottom></product-bottom>
        </div>
      </div>
    </transition>
</template>

<script>
  import MeLoading from 'base/loading';
  import MeScroll from 'base/scroll';
  import ProductHeader from './header';
  import ProductSlider from './slider';
  import ProductMessage from './message';
  import ProductComment from './comment';
  import ProductScore from './score';
  import ProductBottom from './bottom';

  export default {
    name: 'Product',
    components: {
      'me-loading': MeLoading,
      'me-scroll': MeScroll,
      'product-header': ProductHeader,
      'product-slider': ProductSlider,
      'product-message': ProductMessage,
      'product-comment': ProductComment,
      'product-score': ProductScore,
      'product-bottom': ProductBottom
    },
    data() {
      return {
        isShow: false,
        scores: []
      };
    },
    mounted() {
      this.isShow = true;
    },
    methods: {
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
        // setTimeout(()=>{
        //   end();
        // },1000)
      },
      getScore(scores) {
        this.scores = scores;
      }

    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .product{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background: $bgc-theme;
  }
  .product-enter-active,
  .product-leave-active {
      transition: all 0.3s;
  }

  .product-enter,
  .product-leave-to {
     transform: translate3d(100%, 0, 0);
  }
</style>
