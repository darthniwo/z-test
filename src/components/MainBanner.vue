<template>
	<div class="main-banner featured-person">
		<div class="wrapper">
			<banner-card />
		</div>
		<div class="closing-banner">
			<div class="left-side">closing in</div>
			<div class="right-side">22 days</div>
		</div>
	</div>
</template>

<script>
	import BannerCard from '@/components/BannerCard';

	export default {
		components:{
			BannerCard
		}
	}
</script>

<style lang="scss" scoped>
	.main-banner{
		position:relative;
		height:100vh;
		&.featured-person{
			background: transparent url('~@/assets/pope.jpeg') no-repeat top center;
			background-size: cover;
		}
	}
	.closing-banner{
		position: absolute;
	}
</style>