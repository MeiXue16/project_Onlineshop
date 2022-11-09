<template>
	<div class='recommend'>
		<Card></Card>
		<ul>
			<li v-for='(item,index) in recommendList' :key='index'>
				<h2>
					<img :src='item.imgUrl' alt="">
				</h2>
				<div>
					<h3>{{item.name}}</h3>
					<p>{{item.content}}</p>
					<div class='price'>
						<b>{{item.price}}</b>
						<span>€</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import Card from '@/components/home/Card.vue';
export default{
	// props:{
	// 	recommendList:Array
	// },
		data(){
		return{
			recommendList:[
				{
					id:1,
					imgUrl:'./images/recommend1.jpeg',
					name:'Long Jing Grüner Tee Green Tea 125g',
					content:'aus der HangZhou, China (Frühjahrsernte 2022)',
					price:24.99
				},
				{
					id:2,
					imgUrl:'./images/recommend2.jpeg',
					name:'Milch Oolong Tee Hohe Qualität 250g',
					content:'100% Natural Green Food',
					price:13.51
				}
			]
		}
	  },
	components:{
		Card
	}
}
</script>

<style scoped>
.recommend ul li{
	position: relative;
}
.recommend ul li h2{
	padding:0 30px;
}
.recommend ul li img{
	width: 75px;
	height:100px;
	border-radius: 10px;
}
.recommend ul li > div{
	position: absolute;
	right:0;
	top:0;
	left: 120px;
	display: flex;
	flex-direction: column;
	padding:20px 30px;
}
.recommend ul li > div h3{
	font-size:12px;
	overflow: hidden;
	text-overflow: ellipsis;
}
.recommend ul li > div p{
	font-size:10px;
	overflow: hidden;
	text-overflow: ellipsis;
}
.price{
	margin-top: 5px;
	text-align: right;
	color:red;
}
.price b{
	font-size:12px;
}
.price span{
	font-size:10px;
}
</style>