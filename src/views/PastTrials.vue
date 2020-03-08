<template>
  <div class="past-trials">
    <main-header />
    <main-banner />
    <div class="wrapper">
      <message-banner />
      <h2>Previuos Votes</h2>
      <card-feed />
      <lower-banner />
      <main-footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader';
import MainBanner from '@/components/MainBanner';
import MessageBanner from '@/components/MessageBanner';
import CardFeed from '@/components/CardFeed';
import LowerBanner from '@/components/LowerBanner';
import MainFooter from '@/components/MainFooter';

export default {
  name: 'Past Trials',
  components: {
    MainHeader,
    MainBanner,
    MessageBanner,
    CardFeed,
    LowerBanner,
    MainFooter
  }
}
</script>
<style lang="scss">
  h2{
			color:#333333;
			font-size: 40px;
			font-weight: 300;
      margin:40px 0;
		}
</style>