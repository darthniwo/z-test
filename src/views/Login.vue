<template>
  <div class="login">
    <main-header />
    <div class="wrapper">
      <div class="login-box">
        <h2>Login</h2>
        <div class="field">
          <label>Username</label>
          <input type="text">
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password">
        </div>
      </div>
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
  name: 'Home',
  components: {
    MainHeader,
    MessageBanner,
    LowerBanner,
    MainFooter
  }
}
</script>
<style lang="scss">
.login{
  padding-top:100px;
  label{
    display:block;
    font-size: 16px;
    margin-bottom:10px;
  }
  input{
    font-size:14px;
    padding:5px;
    width:200px;
  }
  .field{
    margin-bottom: 20px;
  }
}
  h2{
			color:#333333;
			font-size: 40px;
			font-weight: 300;
      margin:40px 0;
		}
</style>