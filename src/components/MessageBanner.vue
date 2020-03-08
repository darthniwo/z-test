<template>
	<div :class="['message-banner', {'hidden': !isOpen}]">
		<div class="main-msg">
			<span>Speak out. Be heard</span>
			<b>Be counted</b>
		</div>
		<p>
			Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
		</p>
		<a @click="closeBanner"><img src="~@/assets/close-icon.png" alt="close banner"></a>
</div>
</template>

<script>
	export default {
		data(){
			return{
				isOpen: true,
			}
		},
		methods:{
			closeBanner() {
				this.isOpen = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message-banner{
		background-color: #EBEBEB;
		display:flex;
		align-items: center;
		justify-content: center;
		padding:20px;
		margin:40px 0px;
		@media screen and (max-width:600px){
			flex-direction: column;
		}
		p{
			font-size: 15px;
			margin-bottom:10px;
			@media screen and (max-height:450px){
				width:90%;
			}
		}
	}
	.main-msg{
		width:215px;
		text-align: justify;
		margin-right:20px;
		@media screen and (max-width:600px){
			text-align: center;
			margin-bottom:15px;
		}
		span{
			font-size: 16px;
			font-weight: 300;
		}
		b{
			display:block;
			font-size: 24px;
			font-weight: 700;
			letter-spacing: 1px;
		}
	}
</style>