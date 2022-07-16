<template>
	<ul class='icons'>
		<li v-for='(item, index) in iconsList' :key='index'>
			<img :src='item.imgUrl' alt=''>
			<span>{{item.title}}</span>
		</li>
	</ul>
</template>

<script>
export default{
	data(){
		return{
			iconsList:[
				{
					id:1,
					title:'Tee zum Selbsttrinken',
					imgUrl:'./images/icons1.png'
				},
				{
					id:2,
					title:'Teezubehör',
					imgUrl:'./images/icons2.png'
				},
				{
					id:3,
					title:'Tee Geschenkbox',
					imgUrl:'./images/icons3.png'
				},
				{
					id:4,
					title:'Vorteile erhalten',
					imgUrl:'./images/icons4.png'
				},
				{
					id:5,
					title:'Quellenprüfung',
					imgUrl:'./images/icons5.png'
				},
			]
		}
	}
}
</script>

<style scoped>
.icons{
	display: flex;
	justify-content: space-around;
	padding: 10px 0;
}
.icons li{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.icons img{
	width:38px;
	height:38px;
}
.icons span{
	font-size: 16px;
	padding:6px 0;
}
</style>