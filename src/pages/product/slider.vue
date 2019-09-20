<template>
    <div class="slider-wrapper">
        <me-slider
        :data="sliders"
        :direction="direction"
        :loop="loop"
        :interval="interval"
        :pagination="pagination"
        >
            <swiper-slide
            v-for="(item,index) in sliders"
            :key="index">
                <img :src="item" alt="" class="slider-img">
            </swiper-slide>
        </me-slider>
    </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getProductDetail} from 'api/product';

  export default {
    name: 'ProductSlider',
    components: {
      'me-slider': MeSlider,
      'swiper-slide': swiperSlide
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: []
      };
    },
    created() {
      this.getSliders();
    },
    methods: {
      update() {
        return this.getSliders();
      },
      getSliders() {
        getProductDetail(this.$route.params.id).then(data => {
          this.sliders = data.slider;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .slider-wrapper{
      width: 100%;
      .loading-container {
        margin: 200px 0;
      }
  }
  .slider-img{
      height: 100%;
      width: 100%;
  }

</style>
