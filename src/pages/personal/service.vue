<template>
<div class="service">
    <me-navbar class="service-title" >
        <div class="left" slot="left">
            <i class="iconfont icon-personal"></i>
            <span>{{text1}}</span>
        </div>
        <div class="right" slot="right">
            <i>></i>
        </div>
    </me-navbar>
    <me-navbar class="service-title" >
        <div class="left" slot="left">
            <i class="iconfont icon-personal"></i>
            <span>{{text2}}</span>
        </div>
        <div class="right" slot="right">
            <i>></i>
        </div>
    </me-navbar>
    <me-navbar class="service-title" >
        <div class="left" slot="left">
            <i class="iconfont icon-personal"></i>
            <span>{{text3}}</span>
        </div>
        <div class="right" slot="right">
            <i>></i>
        </div>
    </me-navbar>
    <me-navbar class="service-title" >
        <div class="left" slot="left">
            <i class="iconfont icon-personal"></i>
            <span>{{text4}}</span>
        </div>
        <div class="right" slot="right">
            <i>></i>
        </div>
    </me-navbar>
    <me-navbar class="service-title" >
        <div class="left" slot="left">
            <i class="iconfont icon-personal"></i>
            <span>{{text5}}</span>
        </div>
        <div class="right" slot="right">
            <i>></i>
        </div>
    </me-navbar>
</div>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'PersonalService',
    data() {
      return {
        text1: '售后服务',
        text2: '意见反馈',
        text3: '收货地址',
        text4: '退出登录',
        text5: '400-123-8888'
      };
    },
    components: {
      'me-navbar': MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .service{
    margin-top: 14px;
    &-title{
      background-color: #fff;
      font-size: 16px;
      margin-bottom: 2px;
      .right{
              color: #999;
          }
      .iconfont{
          font-size: $icon-font-size;
          margin-right: 5px;
      }
    }
  }

</style>
