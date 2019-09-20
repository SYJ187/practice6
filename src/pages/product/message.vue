<template>
  <div class="message-container">
    <me-navbar class="message-top" v-if="soldCount">
      <div slot="left" class="price"><i class="price-i">￥</i>{{priceText}}</div>
      <div slot="right" class="sold">{{soldCount}}件已售</div>
    </me-navbar>
    <div class="title" v-if="title">{{title}}</div>
    <me-navbar class="message-bottom" v-if="sellCount">
      <div slot="left" class="postage">{{postage}}</div>
      <div slot="center" class="sell-count">月销量{{sellCount}}件</div>
      <div slot="right" class="from">{{from}}</div>
    </me-navbar>
  </div>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import {getProductDetail} from 'api/product';

  export default {
    name: 'ProductMessage',
    components: {
      'me-navbar': MeNavbar
    },
    data() {
      return {
        priceText: '',
        soldCount: '',
        title: '',
        postage: '',
        sellCount: '',
        from: ''
      };
    },
    created() {
      this.getMessages();
    },
    methods: {
      getMessages() {
        getProductDetail(this.$route.params.id).then(data => {
          this.priceText = data.content.priceText;
          this.soldCount = data.content.soldCount;
          this.title = data.content.title;
          this.postage = data.content.postage;
          this.sellCount = data.content.sellCount;
          this.from = data.content.from;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .message-container{
    width: 100%;
  }
  .message-top{
    background: linear-gradient(left,#ef3390,#ef3648);
    width: 100%;

    .price{
      color: $icon-color-default;
      font-size: 14px;
      &-i{
        font-size: 9px;
      }
    }
    .sold{
      font-size: $font-size-base;
      color: $icon-color-default;
      text-align: center;
      height: 28px;
      width: 82px;
      background-color: #cc2d45;
      line-height: 28px;
      border-radius: 5px;
    }
  }

    .title{
      background-color: #fff;
      height: 36px;
      line-height: 36px;
      border-bottom: 1px solid #fcfcfc;
      width: 100%;
      padding: 0 10px;
      color: #051b28;
      @include ellipsis();
    }

  .message-bottom{
    background-color: #fff;
    height: 26px;
    margin-bottom: 10px;
    width: 100%;

    .postage,
    .sell-count,
    .from{
      color: #999;
    }
    .sell-count{
      text-align: center;
    }
  }
</style>
