<template>
	<div class='swiper-main'>
		<swiper :options="swiperOption">
			<swiper-slide 
			   v-for ='(item, index) in swiperList' 
			   :key='index'> <!--这里key也可以是'id'-->
			   <img :src='item.imgUrl' alt=''>
			</swiper-slide>
		</swiper>
		<div class="swiper-pagination"></div>
	</div>
</template> 

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  // props:{
  // 	swiperList:Array
  // },
  data(){
    return{
		swiperList:[
			{
				id:1,
				imgUrl:'./images/swiper1.jpeg'
			},
			{
				id:2,
				imgUrl:'./images/swiper2.jpeg'
			},
			{
				id:3,
				imgUrl:'./images/swiper3.jpeg'
			}
		],
		swiperOption: {//swiper3
			autoplay: 3000,
			speed: 1000,
			pagination: {
				el: '.swiper-pagination'
			}
		}
    }
  },
  components: {
    swiper,
    swiperSlide
  },
}
</script>

<style scoped>
.swiper-main{
	position: relative;
	width: 100%;
	height: 165px;
	
}
.swiper-main img{
	width: 100%;
	height: 165px;
}
.swiper-container{
	width:100%;
	height:165px;
}
.swiper-pagination{
	width: 100%;
	bottom: 0;
}
::v-deep .swiper-pagination-bullet-active{
	background-color: #b0352f;
}
::v-deep .swiper-pagination-bullet{
	margin:0 3px;
}
</style>