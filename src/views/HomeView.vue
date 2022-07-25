<template>
  <div class="home">
	  <div class='headers'>
		  <div class='headers-main'>
						<Header></Header>
						<ly-tabs 
								v-model="tabsValue" 
								:options="options" 
								@change='changeTab'> 
							<ly-tab-item
								v-for="item in tabsItems" 
								:key="item.id"
								:name="item.id"
								:title="item.title"
								@change='changeTab(item.id)'
							/>
						</ly-tabs>
			</div>
		</div>
		<section ref='wrapper'>
			<div>
				<div v-for='(item,index) in newData' :key='index'>
					<Swiper 
						v-if='item.type=="swiperList"'
						:swiperList='item.data'
					></Swiper>
					<Icons 
						v-if='item.type == "iconsList"'
						:iconsList ='item.data'
					></Icons>	
					<Recommend 
						v-if='item.type == "recommendList"'
						:recommendList ='item.data'
					></Recommend>
					<Ad 
						v-if='item.type == "adList"'
						:adList ='item.data'
					></Ad>
					<Like
						v-if='item.type=="likeList"'
						:likeList='item.data'
					></Like>
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
import Ad from "@/components/home/Ad.vue";
import Like from "@/components/home/Like.vue";
//引入插件
import BetterScroll from 'better-scroll';
import axios from 'axios';
export default {
  name: "HomeView",
  data() {
    return  {
			tabsValue: 'fe',
			// tabBarValue: 'home',
			// tabsItems: [
			// 	{ title: 'Recommend', value: '1' },
			// 	{ title: 'Black Tea', value: '2' },
			// 	{ title: 'Green Tea', value: '3' },
			// 	{ title: 'Oolong Tea', value: '4' }, //, badge: 22
			// 	{ title: 'White Tea', value: '5' },
			// 	{ title: 'Pu-erh', value: '6' },
			// 	{ title: 'Yellow Tea', value: '7' },
			// 	{ title: 'Dark Tea', value: '8' },
			// ],
			
			selectedId: 0,
			tabsItems: [],
			newData:[],
			oBetterScroll:'',
			tBetterScroll:'',
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
		Ad,
		Like
  },
  created(){
		this.getData();
	},
	mounted(){
		new BetterScroll(this.$refs.wrapper, {
			movable: true,
			zoom: true,
			click:true
		})
	},
	methods:{
		async getData(){
			
			let res = await axios({
				url:'/api/index_list/0/data/1'
			}); 
			
			//console.log( res );	
			this.tabsItems = Object.freeze(res.data.data.tabsItems);
			this.newData = Object.freeze(res.data.data.data);
		},
		async addData( index ){
			
			let res = await axios({
				url:'/api/index_list/'+index+'/data/1'
			});
			
			if(  res.data.data.constructor !=Array ){
				this.newData = res.data.data.data;
			}else{
				this.newData = res.data.data;
			}
			
		},
		changeTab(id){
			console.log('LyTabs change:', id);
			this.addData(id)
		}
	}
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
