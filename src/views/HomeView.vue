<template>
  <div class="home">
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
	<section>
		<Swiper>
		</Swiper>
		<Icons></Icons>
	</section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/home/Header.vue";
import Tabbar from "@/components/commen/Tabbar.vue";
import Swiper from "@/components/home/Swiper.vue";
import Icons from "@/components/home/Icons.vue";
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
  },
};
</script>

<style scoped>
.ly-tabs{
	postion:fixed;
	top:60px;
	left:0;
}
.ly-tabs ly-tab-item{
	box-shadow: none;
	border-bottom: none;
}
</style>
