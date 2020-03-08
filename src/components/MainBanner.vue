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
		bottom:0;
		width: 100%;
		display:flex;
		.left-side{
			color:#FFF;
			font-size: 12px;
			font-weight: 700;
			display:flex;
			align-items: center;
			justify-content: flex-end;
			position: relative;
			background-color: rgba(0,0,0,0.4);
			height:50px;
			width:40vw;
			padding-right:5px;
			text-transform: uppercase;
			&:after {
				left: 100%;
				top: 50%;
				border: solid transparent;
				content: " ";
				height: 0;
				width: 0;
				position: absolute;
				pointer-events: none;
				border-color: rgba(0, 0, 0, 0);
				border-left-color: rgba(0, 0, 0, 0.4);
				border-width: 5px;
				margin-top: -5px;
			}
		}
		.right-side{
			color:#464646;
			background-color: rgba(255,255,255,0.5);
			height: 50px;
			width:60vw;
			display:flex;
			align-items: center;
			justify-content: flex-start;
			padding-left: 15px;
			font-size: 30px;
		}
	}
</style>