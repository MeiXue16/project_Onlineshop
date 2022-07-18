<template>
  <div class="home">
	<div class='headers'>
		<div class='headers-main'>
			<Header></Header>
			<ly-tabs v-model="tabsValue" :options="options">
				<ly-tab-item
					v-for="item in tabsItems"
					:key="item.value"
					:title="item.title"
					:name="item.value"
					:badge="item.badge"
				/>
			</ly-tabs>
		</div>
	</div>
	<section ref='wrapper'>
		<div>
			<div>
				<Swiper></Swiper>
				<Icons></Icons>
				<Recommend></Recommend>
				<Like></Like>
			</div>
		</div>

	</section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/home/Header.vue";
import Tabbar from "@/components/commen/Tabbar.vue";
import Swiper from "@/components/home/Swiper.vue";
import Icons from "@/components/home/Icons.vue";
import Recommend from "@/components/home/Recommend.vue";
import Like from "@/components/home/Like.vue";
//引入插件
import BetterScroll from 'better-scroll';
export default {
  name: "HomeView",
  data() {
      return  {
			tabsValue: 'fe',
			tabBarValue: 'home',
			tabsItems: [
				{ title: 'Recommend', value: '1' },
				{ title: 'Black Tea', value: '2' },
				{ title: 'Green Tea', value: '3' },
				{ title: 'Oolong Tea', value: '4' }, //, badge: 22
				{ title: 'White Tea', value: '5' },
				{ title: 'Pu-erh', value: '6' },
				{ title: 'Yellow Tea', value: '7' },
				{ title: 'Dark Tea', value: '8' },
			],
			options:{
				activeColor: '#4ac23f', //绿色，没用
			}
      }
    },
  components: {
    Header,
    Tabbar,
	Swiper,
	Icons,
	Recommend,
	Like
  },
  mounted(){
  	new BetterScroll(this.$refs.wrapper, {
  	  movable: true,
  	  zoom: true
  	})
  },
};
</script>

<style scoped>
.home{
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
.headers{
	width: 100%;
	height: 100px;
}
.headers-main{
	position: fixed;
	left:0;
	top:0;
}
section{
	flex:1;
	overflow: hidden;
}
.ly-tabs{
	postion:fixed;
	top:60px;
	left:0;
}
.ly-tabs ly-tab-item{
	box-shadow: none;
	border-bottom: none;
}
::v-deep .ly-tabbar{
	box-shadow:none;
	border-bottom:none;
}
</style>
