<template>
	<div class='tabbar'>
		<ul>
			<li 
			   v-for= '(item, index) in routerList':key='index'
			   @click='switchTab(item.path)' 
			> <!--:key中间不能有空格-->
				<img :src='$route.path.includes(item.path) ? item.selected : item.active' alt=''>
				<span :class='$route.path.includes(item.path) ? "active" : "" '>{{item.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return{
			routerList:[
				{
					title:'hompage',
					path: '/home', //与router/index.js里routes路径设置名称一致
					active: './images/home.png',
					selected:'./images/home-select.png',
				},
				{
					title:'list',
					path: '/list',
					active: './images/list.png',
					selected:'./images/list-select.png',
				},
				{
					title:'cart',
					path: '/cart',
					active: './images/cart.png',
					selected:'./images/cart-select.png',
				},
				{
					title:'my',
					path: '/my',
					active: './images/my.png',
					selected:'./images/my-select.png',
				}
			]
		}
	},
	methods:{
		switchTab(path){
			//判断是否点击的是同一个路由
			if(this.$route.path == path) return;
			//跳转页面
			this.$router.replace(path);
		}
	}
}
</script>

<style scoped>
.tabbar{
	position:fixed;
	left: 0%;
	bottom: 0;
	z-index: 999;
	width: 100%;
	height:60px;
	background-color: #fff;
}
.tabbar ul{
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;
}
.tabbar ul li{
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.tabbar ul li img{
	width: 31px;
	height: 31px;
}
.tabbar ul li span{
	font-size: 16px;
}
.active{
	color: red;
}
</style>