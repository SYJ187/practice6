<template>
  <div class="personal">
    <header class="g-header-container">
      <personal-header></personal-header>
    </header>
    <me-scroll >
      <personal-register />
      <personal-order />
      <personal-assets />
      <personal-service />
      <personal-info />
    </me-scroll>
  </div>
</template>

<script>
  import PersonalHeader from './header';
  import PersonalRegister from './register';
  import PersonalOrder from './order';
  import PersonalAssets from './assets';
  import PersonalService from './service';
  import PersonalInfo from './info';
  import MeScroll from 'base/scroll';

  export default {
    name: 'Personal',
    components: {
      'me-scroll': MeScroll,
      'personal-header': PersonalHeader,
      'personal-register': PersonalRegister,
      'personal-order': PersonalOrder,
      'personal-assets': PersonalAssets,
      'personal-service': PersonalService,
      'personal-info': PersonalInfo

    }
  };
</script>

<style lang="scss" scoped>
  .personal{
    width: 100%;
    height: 100%;
  }
</style>
