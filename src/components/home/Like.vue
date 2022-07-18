<template>
	<div class='like'>
		<Card>
			<span>Das könnte Dich auch interessieren</span>
		</Card>
		<ul>
			<li v-for='(item,index) in likeList' :key='index'>
				<h2>
					<img :src='item.imgUrl' alt="">
				</h2>
				<h3>{{item.name}}</h3>
				<div>
					<b>{{item.price}}</b>
					<span>€</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import Card from '@/components/home/Card.vue';
export default{
	data(){
		return{
			likeList:[
				{
					id:1,
					imgUrl:'./images/like1.jpeg',
					name:'BASILUR Chinese White Tea Papierverpackung 100g',
					price:6.22
				},
				{
					id:2,
					imgUrl:'./images/like2.jpeg',
					name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
					price:79
				},
				{
					id:3,
					imgUrl:'./images/like3.jpeg',
					name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
					price:3.87
				},
			]
		}
	},
	components:{
		Card
	}
}
</script>


<style scoped>
.like ul{
	display: flex;
	flex-wrap: wrap;
}
.like ul li{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
}
.like h3{
	padding:0 6px;
	width: 90%;
	font-size:12px;
	font-weight: 600;
	color:#222;
	overflow: hidden;
	text-overflow: ellipsis;
} 
.like ul li > div{
	width: 90%;
	margin-top: 6px;
	font-size: 12px;
	text-align: left;
	color:red;
}
.like ul li > div span{
	font-size:10px;
}
.like ul li > div b{
	font-weight: 600;
	font-size:12px;
}
.like img{
	width: 75px;
	height: 100px;
	padding: 10px 0;
}
</style>