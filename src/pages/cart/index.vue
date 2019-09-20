<template>
  <div class="cart">
    <header class="g-header-container">
      <cart-header></cart-header>
    </header>
    <me-scroll>
      <cart-content />
    </me-scroll>
  </div>
</template>

<script>
  import CartHeader from './header';
  import CartContent from './content';
  import MeScroll from 'base/scroll';

  export default {
    name: 'cart',
    components: {
      'me-scroll': MeScroll,
      'cart-header': CartHeader,
      'cart-content': CartContent

    }
  };
</script>

<style lang="scss" scoped>
.cart{
    width: 100%;
    height: 100%;
  }
</style>
