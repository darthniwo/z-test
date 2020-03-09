<template>
	<div class="person-card">
		<div class="person-card__pic">
			<div class="pic-overlay"></div>
			<img class="picture" :src="getImg(info.name)" alt="">
		</div>
		<div :class="['person-card__vote-def', percentage.upVote > percentage.downVote ? 'person-card__vote-def--upvote' : 'person-card__vote-def--downvote']">    
			<img v-if="percentage.upVote > percentage.downVote"  src="~@/assets/thumbs-up.svg" alt="upvotes">
			<img v-else src="~@/assets/thumbs-down.svg" alt="downvotes">
		</div>
		<div class="person-card__info">
			<h3>
				<span>{{info.name}}</span>
			</h3>
			<span class="time-ago">
				<b>{{momentInstance(info.modifiedDate, "YYYYMMDD").fromNow()}}</b> in {{info.category}}
			</span>
			<div class="vote-area" v-if="!voteCasted">	
				<p>{{info.description}}</p>
				<div class="person-card__vote-section">	
					<label :class="['vote-check vote-check--upvote', {'selected': voteValue === 'good'}]" :for="info.id + 'upvote'">
						<input :id="info.id + 'upvote'" type="radio" :name="info.name" v-model="voteValue" value="good">
						<img src="~@/assets/thumbs-up.svg" alt="upvote">
					</label>
					<label :class="['vote-check vote-check--downvote',{'selected': voteValue === 'bad'}]" :for="info.id + 'downvote'">
						<input :id="info.id + 'downvote'" type="radio" :name="info.name" v-model="voteValue" value="bad">
						<img src="~@/assets/thumbs-down.svg" alt="downvote">
					</label>
					<button :id="info.id+'_vote-btn'" class="main-btn" @click="doVote">Vote Now</button>
					<span v-if="isMessageOn">You need to choose one!</span>
				</div>
			</div>
			<div v-else class="reset-vote">
				<p>Thank you for voting!</p>
				<button class="main-btn" @click="resetVote">Vote again</button>
			</div>
		</div>
		
		<div class="person-card__vote-percentage">
					<div class="good-side" :style="{'width': percentage.upVote.toFixed(2) + '%'}">
						<img src="~@/assets/thumbs-up.svg" alt="upvotes"> <span>{{Math.floor(percentage.upVote)}}% </span>
					</div>
					<div class="bad-side" :style="{'width': percentage.downVote.toFixed(2) + '%'}">
						<img src="~@/assets/thumbs-down.svg" alt="downvotes"> <span>{{Math.floor(percentage.downVote)}}%</span>
					</div>
			</div>
	</div>
</template>

<script>
import {getVotePercentage} from '../utils/helpers';
import moment from 'moment';

	export default {
		props:[
			'person',
			'vote'
		],
		data(){
			return{
				info: null,
				percentage: null,
				voteValue: null,
				voteCasted: false,
				isMessageOn: false
			}
		},
		beforeMount(){
			this.momentInstance = moment;
			this.info = this.$props.person;
			this.percentage = getVotePercentage(this.info.upVotes, this.info.downVotes);
		},
		methods:{
			getImg(name){
				const url = name.split(' ')[0].toLowerCase();
				return `/img/${url}.png`;
			},
			getMostVoted(){
				return this.percentage.upVote > this.percentage.downVote ? 'person-card__vote-def--upvote' : 'person-card__vote-def--downvote';
			},
			resetVote(){
				this.voteCasted = false;
				this.voteValue = null;
			},
			doVote(){
				if(this.voteValue){
					this.isMessageOn = false;
					this.voteCasted = true;
					this.$props.vote(this.voteValue === 'good' ? true : false, this.info.id);
				}else{
					this.isMessageOn = true;
				}
			}
		},
		watch: {
			info:{
				handler(newVal){
					this.info = newVal;
					this.percentage = getVotePercentage(newVal.upVotes, newVal.downVotes);
				},
				deep: true
			}
		},
	}
</script>

<style lang="scss" scoped>
.person-card{
	flex-grow: 1;
	margin:0 40px 40px 0;
	position:relative;
	height:550px;
	width:490px;
	@media screen and (max-width: 850px){
		margin:0px 0px 40px 0px;
		width:100%;
		overflow: hidden;
	}
	&__info{
		color: #FFF;
		position: absolute;
		top:258px;
		left:40px;
		width:95%;
		h3{
			align-items: flex-end;
			display:flex;
			height:85px;
			font-size: 45px;
			margin-bottom:10px;
			width:90%
		}
		p{
			font-size: 16px;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			margin-bottom:20px;
			overflow: hidden;
			text-overflow: ellipsis;
			width: 90%;
		}
	}
	&__vote-percentage{
		bottom:0;
		display:flex;
		align-items: center;
		position:absolute;
		width:100%;
		.good-side{
			background-color: #1CBBB4;
			height:50px;
		}
		.bad-side{
			background-color: #FFAD1D;
			height:50px;
		}
		& > div{
			display:flex;
			align-items: center;
		}
		img{
			height:25px;
			margin-left:10px;
			width:25px;
		}
		span{
			color:#FFF;
			font-size: 20px;
			margin-left:10px;
			font-weight: 300;
		}
	}
	&__vote-def{
		position: absolute;
		top:305px;
		left:0;
		display:flex;
		align-items: center;
    justify-content: center;
		height:32px;
		width:32px;
		&--upvote{
			background-color: #1CBBB4;
		}
		&--downvote{
			background-color: #FFAD1D;
		}
		img{
			height:19px;
			width:19px;
		}
	}

	&__vote-section{
		display:flex;
		align-items: center;
		flex-direction: row;
		span{
			font-size: 12px;
			margin-left: 10px;
		}
		input{
			position:absolute;
			opacity: 0;
		}
		.vote-check{
			border:2px solid transparent;
			cursor: pointer;
			display:flex;
			align-items: center;
			justify-content: center;
			height:30px;
			margin-right:10px;
			width:30px;
			&.selected{
				border-color: #FFF;
			}
			&--upvote{
				background-color: #1CBBB4;
			}
			&--downvote{
				background-color: #FFAD1D;
			}
			img{
				height:19px;
				width:19px;
			}
		}
	}
	.picture{
		display: block;
		max-width:100%;
		max-height:100%;
		width: auto;
		height: auto;
		z-index:-1;
		@media screen and (max-width: 800px){
				width:100%;
		}
	}
	.pic-overlay{
		background: rgb(0,0,0);
		background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
		position: absolute;
		bottom:0;
		left:0;
		height:100%;
		width:100%;
	}
	.time-ago{
		display:block;
		font-size: 12px;
		margin-bottom:20px;
		b{
			font-weight: 700;
		}
	}
}
// @media (max-width:800){
// 	.person-card {
// 		margin:0px 0px 40px 0px;
// 	}
// }
</style>