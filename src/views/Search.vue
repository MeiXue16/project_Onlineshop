<template>
	<div class="search"> 
		<Header></Header>
		<section>
			<div class="search-history">
				<h2>
					<i class="iconfont icon-shijian"></i>
					<span>ZULETZT GESUCHT</span> 
				</h2>
				
				<ul>
					<li>Yogi Tea</li>
					<li>Green Tea</li>
					<li>Pure</li>
					<li>Bio</li>
					<li>Zitrone</li>
					<li>Lemon</li>
					<li>Peach</li>
				</ul>
			</div>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Header from '@/components/search/SearchHeader.vue'
import Tabbar from '@/components/commen/Tabbar.vue'
export default{
	components: {
		Header,
		Tabbar
	}
}
</script>

<style scoped>
.search{
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
section{
	flex:1;
	overflow: hidden;
	background-color: #f5f5f5;
}
.search-history{
	padding: 20px;
}
.search-history h2{
	font-size: 20px;
	font-weight: 400;
}
.search-history h2 i{
	color: red;
	padding-right: 3px;
	font-size: 20px;
}
</style>