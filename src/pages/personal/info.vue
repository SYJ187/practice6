<template>
  <div class="info">
    客服热线{{num}}(8:00-22:00)<br>
    拨打前请记录您的UID 0
  </div>
</template>

<script>

  export default {
    name: 'PersonalInfo',
    data() {
      return {
        num: '400-123-8888'
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .info{
    margin: 20px;
    line-height: 1.5;
    color: #999;
  }

</style>
