<template>
  <div class="lower-banner">
    <div class="bg-overlay"></div>
    <div class="content">
      <p>Is there anyone else you would want us to add?</p>
      <button class="main-btn main-btn--dark">Submit a Name</button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .lower-banner{
    height:90px;
    background: url('~@/assets/lower-banner.png') no-repeat center;
    position:relative;
    margin-bottom:40px;
    width:100%;
    .bg-overlay{
      background-color: rgba(255,255,255,0.7);
      position:absolute;
      top:0;
      left:0;
      height:100%;
      width:100%;
      z-index:0;
    }
    .content{
      position:relative;
      z-index: 1;
      display:flex;
      align-items: center;
      justify-content: space-around;
      height:90px;
      p{
        font-size: 30px;
        font-weight: 300;
      }
    }
  }
</style>