<template>
  <div class="main-header">
		<div class="wrapper">
			<h1>Rule of Thumb.</h1>
			<nav>
				<router-link to="/past-trials">Past Trials</router-link>
				<router-link to="/how">How It Works</router-link>
				<router-link to="/login">Login/Sign Up</router-link>
				<img src="~@/assets/glass-icon.svg" alt="search" />
			</nav>
		</div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.main-header{
	position:fixed;
	top:0;
	left:0;
	width:100%;
	h1{
		float: left;
	}
	nav{
		float:right;
	}
}
</style>