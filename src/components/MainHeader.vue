<template>
  <div :class="['main-header', {'bg': !transparent}]">
		<div class="wrapper">
			<h1>
				<router-link to="/">Rule of Thumb.</router-link>
			</h1>
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
			data(){
				return{
					transparent: true,
				}
			},
      created () {
				window.addEventListener('scroll', this.handleScroll);
			},
			destroyed () {
				window.removeEventListener('scroll', this.handleScroll);
			},
			methods: {
				handleScroll () {
					const scrolled = window.pageYOffset;
					this.transparent = scrolled > 99 ? false : true;
				}
			}
    }
</script>

<style scoped lang="scss">
.main-header{
	background: rgb(0,0,0);
	background: linear-gradient(180deg, rgba(0,0,0,0.711922268907563) 0%, rgba(0,0,0,0) 100%);
	height: 100px;
	position:fixed;
	top:0;
	left:0;
	width:100%;
	z-index: 2;
	transition: all .2s ease-in;
	&.bg{
		height:60px;
		background: rgba(255,255,255,0.8);
		@media screen and (max-width:600px){
			height:100px;
		}
		a{
			color:#555;
			&:hover{border-color: #555;}
		}
		h1{
			color:#555;
			margin-top:15px;
		}
		nav{
			margin-top:20px;
		}
	}
	h1{
		float: left;
		
		text-shadow:rgba(0,0,0,0.3) 0px 1px 5px;
		margin-top:25px;
		a{
			color:#FFF;
			font-size: 32px;
			text-decoration: none;
			border: 0 none;
			&:hover{
				border-bottom: 0 none;
			}
			&.router-link-exact-active{
				border:0 none;
			}
		}
		@media screen and (max-width:600px){
			float:none;
			text-align: center;
		}

	}
	nav{
		float:right;
		margin-top:25px;
		@media screen and (max-width:600px){
			float:none;
			text-align: center;
		}
		img{
			height:25px;
			width:25px;
			vertical-align: middle;
		}
	}
	a{
		color:#FFF;
		font-size: 16px;
		margin-right:25px;
		text-decoration: none;
		&:hover{
			border-bottom: 1px solid #FFF;
		}
		&.router-link-exact-active{
			border-bottom: 3px solid #FFF;
		}
	}
}
</style>