<template>
	<div class="banner-card">
		<div class="banner-card__info-area">
			<h2>
				<span>What's your opinion on</span>
				Pope Francis?
			</h2>
			<p>He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </p>
			<a href="">
				<img src="~@/assets/wiki-logo.png" alt="wikipedia-logo" /> 
				<span>More information</span>
			</a>
			<span class="title">What's your veredict</span>
		</div>
		<div class="banner-card__vote-area">
			<button class="btn btn--upvote"><img src="~@/assets/thumbs-up.svg" alt="upvote"></button>
			<button class="btn btn--downvote"><img src="~@/assets/thumbs-down.svg" alt="downvote"></button>
		</div>
	</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
	.banner-card{
		color:#FFF;
		position:absolute;
		top:20vh;
		@media screen and (max-width:850px){
			width:440px;
		}
		@media screen and (max-width: 450px){
			top:60vh;
			width:100%;
		}
		@media screen and (max-height:450px){
			width:440px;
		}
		&__info-area{
			background-color: rgba(0,0,0,0.5);
			backdrop-filter: blur(30px); // esto nada mas funciona en chrome ... I know, but wth
			height:300px;
			padding:40px 30px 30px 30px;
			width:440px;
			@media screen and (max-width: 850px){
				height: 120px;
				width:90%;
				padding: 5%;
			}
			p{
				font-size: 20px;
				font-weight: 300;
				line-height: 20px;
				margin-bottom:25px;
				width:85%;
				@media screen and (max-width: 850px){
					display:none;
				}
			}
			a {
				color:#FFF;
				display: block;
				margin-bottom: 50px;
				& > span{
					font-size: 14px;
					font-weight: 300;
				}
				img{
					vertical-align: middle;
					margin-right:5px;
				}
				@media screen and (max-width: 850px){
					display:none;
				}
			}
			span{
				font-size: 20px;
				font-weight: 700;
			}
		}
		&__vote-area{
			display:flex;
			flex-flow: row;
			width:100%;
			.btn{
				flex:1;
				display:flex;
				align-items: center;
				justify-content: center;
				opacity:0.8;
				height:80px;
				&--upvote{
					background-color: #1CBBB4;
				}
				&--downvote{
					background-color: #FFAD1D;
				}
			}
		}
		h2{
			color:#FFF;
			font-size:60px;
			margin-bottom:30px;
			margin-top:0;
			@media screen and (max-width: 850px){
				font-size: 40px;
				margin-bottom:20px;
			}
			span{
				display:block;
				font-size: 16px;
				font-weight: 300;
			}
		}
	}
</style>