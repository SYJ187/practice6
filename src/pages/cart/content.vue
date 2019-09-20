<template>
  <img src="./cart.png" alt="" class="content">
</template>

<script>

  export default {
    name: 'CartContent'
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .content{
      width: 100%;
      margin-top: $navbar-height;
  }
</style>
