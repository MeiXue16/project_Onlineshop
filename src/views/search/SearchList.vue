<template>
	<div class='search-list'>
		<div class='headers'>
			<Header></Header>
			<ul>
				<li>
					<div>Beste Treffer zuerst</div>
				</li>
				<li>
					<div>Preis</div>
					<div class='search-filter'>
						<i class='iconfont icon-arrow_up_fat'></i>
						<i class='iconfont icon-arrow_down_fat'></i>
					</div>
				</li>
				<li>
					<div>Umsatz</div>
					<div class='search-filter'>
						<i class='iconfont icon-arrow_up_fat'></i>
						<i class='iconfont icon-arrow_down_fat'></i>
					</div>
				</li>
			</ul>
		</div>
		<section>
			<ul>
				<li>
					<img src="../../assets/images/goods.png" alt="">
					<h3>Turnier-Tee - Die 3. Wuyishan Tee-Messe & Xiandian Cup - Qualitätspreis Zimt160g</h3>
					<div class='price'>
						<div>
							
							<b>238</b>
							<span>€</span>
						</div>
						<div>Zum Kauf</div>
					</div>
				</li>
				<li>
					<img src="../../assets/images/goods.png" alt="">
					<h3>Turnier-Tee - Die 3. Wuyishan Tee-Messe & Xiandian Cup - Qualitätspreis Zimt160g</h3>
					<div class='price'>
						<div>
							
							<b>238</b>
							<span>€</span>
						</div>
						<div>Zum Kauf</div>
					</div>
				</li>
				<li>
					<img src="../../assets/images/goods.png" alt="">
					<h3>Turnier-Tee - Die 3. Wuyishan Tee-Messe & Xiandian Cup - Qualitätspreis Zimt160g</h3>
					<div class='price'>
						<div>
							
							<b>238</b>
							<span>€</span>
						</div>
						<div>Zum Kauf</div>
					</div>
				</li>
				
			</ul>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Header from '@/components/search/SearchHeader.vue';
import Tabbar from '@/components/commen/Tabbar.vue';
export default{
	components:{
		Header,
		Tabbar
	}
}
</script>

<style scoped>
.search-list{
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
section{
	flex: 1;
	overflow: hidden;
}
.headers ul{
	display: flex;
	justify-content: space-around;
	padding:0.533333rem 0;
	font-size:16px;
	/* font-size: 15px; */
}
.headers ul li{
	display: flex;
	align-items: center;
	
}
.headers ul li > div{
	padding:0 3px;
	font-size: 15px;
}
.headers ul li  .search-filter{
	display: flex;
	flex-direction: column;
	
}
section{
	flex:1;
	overflow: hidden;
}
section ul{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
section ul li {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 50%;
	padding:10px;
}
section ul li img{
	width: 4.533333rem;
	height: 4.533333rem;
}
section ul li h3{
	width: 100%;
	font-size:14px;
	color:#222;
	font-weight: 400;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
section ul li .price{
	display: flex;
	justify-content: space-between;
	padding:10px 0;
	width: 100%;
	font-size:14px;
}
section ul li .price div:first-child span{
	font-size: 12px;
	color:#b0352f;
}
section ul li .price div:first-child b{
	color:#b0352f;
	font: size 12px;
}
section ul li .price div:last-child{
	padding:0.08rem 0.16rem;
	color:#fff;
	background-color: #b0352f;
	border-radius: 0.16rem;
}
</style>