<template>
  <div class="home">
    <main-header></main-header>
    <main-banner></main-banner>
    <div class="wrapper">
      <message-banner />
      <card-feed />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import MainHeader from '@/components/MainHeader';
import MainBanner from '@/components/MainBanner';
import MessageBanner from '@/components/MessageBanner';
import CardFeed from '@/components/CardFeed';

export default {
  name: 'Home',
  components: {
    MainHeader,
    MainBanner,
    MessageBanner,
    CardFeed
  }
}
</script>
<style lang="scss">

</style>