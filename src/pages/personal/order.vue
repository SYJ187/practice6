<template>
  <div class="order">
    <me-navbar class="order-title" >
        <div class="left" slot="left">
            <i class="iconfont icon-personal"></i>
            <span>我的订单</span>
        </div>
        <div class="right" slot="right">
            <span>查看我的订单</span>
            <i>></i>
        </div>
    </me-navbar>
    <ul class="order-list">
        <li class="order-list-item">
            <i class="iconfont icon-personal"></i>
            <p>{{text1}}</p>
        </li>
        <li class="order-list-item">
            <i class="iconfont icon-personal"></i>
            <p>{{text2}}</p>
        </li>
        <li class="order-list-item">
            <i class="iconfont icon-personal"></i>
            <p>{{text3}}</p>
        </li>
        <li class="order-list-item">
            <i class="iconfont icon-personal"></i>
            <p>{{text4}}</p>
        </li>
    </ul>
</div>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'PersonalOrder',
    data() {
      return {
        text1: '待付款',
        text2: '待收货',
        text3: '待评价',
        text4: '退货/退款'
      };
    },
    components: {
      'me-navbar': MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .order{
      margin-top: 20px;
      &-title{
          background-color: #fff;
          font-size: 16px;
          .iconfont{
              font-size: $icon-font-size;
              margin-right: 5px;
          }
          .right{
              color: #999;
          }

      }
      &-list{
        margin-top: 2px;
        @include flex-center();
        background-color: #fff;
        height: 80px;

        &-item{
            flex: 1;
            @include flex-center(column);
            .iconfont{
                font-size: 30px;
                margin-bottom: 10px;
            }
            p{
                font-size: 16px;
            }
        }
      }
  }

</style>
