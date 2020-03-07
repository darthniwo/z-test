<template>
	<div class="['message-banner'. {'hidden': !isOpen}]">
		<div class="main-msg">
			<span>Speak out. Be heard</span>
			<b>Be</b>
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

</style>