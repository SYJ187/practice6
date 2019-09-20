<template>
    <div class="score" v-if="shopName">
        <div class="score-top">
          <img :src="shopIcon" alt="" class="score-top-icon">
          <div class="score-top-name">{{shopName}}</div>
          <img :src="creditLevelIcon" alt="" class="score-top-credit">
        </div>
        <ul class="score-evaluates-list">
          <li
            class="score-evaluates-item"
            v-for="(item, index) in evaluates"
            :key="index">
            {{item.title}} {{item.score}}
          </li>
        </ul>
    </div>
</template>

<script>
  import {getProductDetail} from 'api/product';
  export default {
    name: 'ProductScore',
    data() {
      return {
        shopIcon: '',
        shopName: '',
        creditLevelIcon: '',
        evaluates: {},
        scores: []
      };
    },
    created() {
      this.getScore();
    },
    methods: {
      getScore() {
        getProductDetail(this.$route.params.id).then(data => {
          this.shopIcon = data.content.seller.shopIcon;
          this.shopName = data.content.seller.shopName;
          this.creditLevelIcon = data.content.seller.creditLevelIcon;
          this.evaluates = data.content.seller.evaluates;
          this.scores = this.scores.concat(data.evaluates);

          this.$emit('loaded', this.scores);

          // console.log(this.evaluates);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .score{
    &-top{
      position: relative;

      &-icon{
        position: absolute;
        left: 10px;
        height: 48px;
        width: 48px;
        border: 1px solid #999;
      }
      &-name{
        position: absolute;
        top: 10px;
        left: 68px;
        color: #333;
      }
      &-credit{
        margin-left: 68px;
        margin-top: 30px;
        height: 14px;
        width: 29px;
        border-radius: 5px;
      }
    }

    &-evaluates-list{
      margin-top: 10px;
      @include flex-center();
    }
    &-evaluates-item{
      @include flex-center();
      margin-right: 10px;
      color: #999;
      padding-bottom: 60px;
    }
  }

</style>
