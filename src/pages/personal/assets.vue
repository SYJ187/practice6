<template>
  <div class="assets">
    <me-navbar class="assets-title" >
        <div class="left" slot="left">
            <i class="iconfont icon-personal"></i>
            <span>我的资产</span>
        </div>
        <div class="right" slot="right">
            <i>></i>
        </div>
    </me-navbar>
    <ul class="assets-list">
        <li v-for="(item,index) in items" :key="index" class="assets-list-item">
            <p>{{item}}</p>
        </li>
    </ul>
</div>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'PersonalAssets',
    data() {
      return {
        items: ['现金券', '红包', '余额', '礼品卡']
      };
    },
    components: {
      'me-navbar': MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .assets{
    margin-top: 14px;
    &-title{
      background-color: #fff;
      font-size: 16px;
      .right{
              color: #999;
          }
      .iconfont{
          font-size: $icon-font-size;
          margin-right: 5px;
      }
    }
    &-list{
        margin-top: 2px;
        @include flex-center();
        background-color: #fff;
        height: 48px;

        &-item{
            flex: 1;
            @include flex-center(column);
            p{
                font-size: 14px;
                color: #999;
            }
        }
      }
  }

</style>
