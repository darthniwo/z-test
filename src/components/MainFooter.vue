<template>
  <div class="main-footer">
  <ul>
    <li><a>Terms and Conditions</a></li>
    <li><a>Privacy Policy</a></li>
    <li><a>Contact Us</a></li>
  </ul>
  <div class="networks">
    <span>Follow Us </span>
    <a href=""><img src="~@/assets/fb-icon.svg" alt="facebook"></a>
    <a href=""><img src="~@/assets/twt-icon.svg" alt="twiter"></a>
  </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .main-footer{
    padding:35px 0;
    background-image: linear-gradient(to right, #999 10%, rgba(255, 255, 255, 0) 0%);
    background-position: top;
    background-size: 9px 1px;
    background-repeat: repeat-x;
    a{
      font-size: 12px;
      text-decoration: none;
    }
    ul{
      float:left;
      display:flex;
      align-items: center;
      li{margin-right:15px;}
      @media screen and (max-width:600px){
        float:none;
        justify-content: center;
        padding:10px;
      }
    }
    .networks{
      font-size: 12px;
      float:right;
      display:flex;
      align-items: center;
      @media screen and (max-width:600px){
        float:none;
        justify-content: center;
        padding:10px;
      }
      *{
        margin-right: 15px;
        &:last-child{margin-right:0;}
      }
    }
  }
</style>