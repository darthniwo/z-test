<template>
  <div class="how">
    <main-header />
    <div class="wrapper">
      <message-banner />
      <lower-banner />
      <main-footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader';
import MessageBanner from '@/components/MessageBanner';
import LowerBanner from '@/components/LowerBanner';
import MainFooter from '@/components/MainFooter';

export default {
  name: 'How',
  components: {
    MainHeader,
    MessageBanner,
    LowerBanner,
    MainFooter
  }
}
</script>
<style lang="scss">
  .how{
    padding-top:200px;
  }
  h2{
			color:#333333;
			font-size: 40px;
			font-weight: 300;
      margin:40px 0;
		}
</style>