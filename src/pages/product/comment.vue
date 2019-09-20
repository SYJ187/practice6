<template>
  <div class="comment">
    <h4 class="comment-title" v-if="totalCount">商品评价({{totalCount}})</h4>
    <ul class="comment-list">
      <li
        class="comment-item"
        v-for="(item, index) in keywords"
        :key="index"
      >{{item.word}}</li>
    </ul>
    <ul class="rate-list">
      <li
        class="rate-item"
        v-for="(item, index) in rateList"
        :key="index">
        <div>
          <img :src="item.headPic" alt="" class="rate-item-pic">
          <span class="rate-item-name">{{item.userName}}</span>
        </div>
        <div class="rate-item-content">{{item.content}}</div>
        <div>
          <span class="rate-item-time">{{item.dateTime}}</span>
          <span class="rate-item-info">{{item.skuInfo}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getProductDetail} from 'api/product';
  export default {
    name: 'ProductComment',
    components: {
    },
    data() {
      return {
        totalCount: '',
        keywords: {},
        rateList: {},
        comment: []
      };
    },
    created() {
      this.getComments();
    },
    methods: {
      getComments() {
        getProductDetail(this.$route.params.id).then(data => {
          this.totalCount = data.content.review.totalCount;
          this.keywords = data.content.review.keywords;
          this.rateList = data.content.review.rateList;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .comment {
    padding-left: 10px;
    background-color: #fff;
    margin-bottom: 10px;
    padding-bottom: 10px;

    &-title {
      height: 34px;
      line-height: 34px;
      font-size: $font-size-l;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      padding: 8px;
      background-color: #ffeeee;
      border-radius: 4px;
      margin: 0 10px 10px 0;
      color: #686868;
    }
    .rate-list,
    .rate-item{
      &-pic{
        height: 22px;
        width: 22px;
        border-radius: 50%;
        vertical-align: middle;
        margin: 10px 0;

      }
      &-name{
        color: #666;
        margin: 10px 0;
      }
      &-content{
        color: #051b28;
        line-height: 1.5;
        margin-bottom: 10px;
      }
      &-time{
        color: #999;
      }
      &-info{
        color: #999;
      }
    }
  }

</style>
