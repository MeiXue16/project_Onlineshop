<template>
	<div class="search-index">
		<Header></Header>
		<section>
			<div class="search-history">
				<h2>
					<i class="iconfont icon-shijian"></i>
					<span>ZULETZT GESUCHT</span> 
					<span @click="goDelete">Alle löschen</span>
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
			<!-- <div>
				<h1>
					BELIEBTE SUCHEN
				</h1>
				<Like></Like>
				
			</div> -->
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
.search-index{
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
	padding: 8px 14px;
}
.search-history h2{
	position: relative;
	font-size: 15px;
	font-weight: 400;
}
.search-history h2 i{
	color: red;
	padding-right: 3px;
	font-size: 20px;
}
.search-history h2 span:last-child{
	position: absolute;
	right: 12px;
	padding: 6px 0;
}
.search-history ul{
	padding:5px 0;
	display: flex;
	flex-wrap: wrap;
}
.search-history ul li{
	margin: 10px;
	padding: 3px 6px;
	font-size: 12px;
	border: 1px solid #ccc;
}
</style>