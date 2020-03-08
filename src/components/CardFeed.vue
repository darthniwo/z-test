<template>
	<div class="card-feed">
		<div v-for="person in people" :key="person.id">
			<person-card :person="person" :vote="voting"></person-card>
		</div>
	</div>
</template>

<script>
	import PersonCard from '@/components/PersonCard';
	import {feedArray} from '../utils/helpers';
	export default {
		data(){
			return{
				people: []
			}
		},
		beforeMount() {
			const feed = localStorage.getItem('people') || [];
			if(feed.length === 0 || feed === 'undefined'){
				this.people = [...feedArray];
				localStorage.setItem('people', JSON.stringify(this.people));
			}else{
				this.people = JSON.parse(feed);
			}
		},
		components:{
			PersonCard
		},
		methods:{
			voting(isGood, id){
				const person = this.people.filter( item => item.id === id)[0];
				if(isGood){
					person.upVotes++;
				}else{
					person.downVotes++;
				}
				const noTarget = this.people.filter( item => item.id !== id)
				const updatedPeople = [...noTarget, person];
				this.people = updatedPeople.sort((a, b) => (a.id > b.id) ? 1 : -1);
				localStorage.setItem('people', JSON.stringify(this.people));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-feed{
		display:flex;
		flex-flow: row wrap;
		justify-content: center;
		& > div:nth-child(even) .person-card{
			margin:0px 0px 40px 0px;
		}
	}
</style>