<template>
	<div class='ad'>
		<ul>
			<li
			v-for='(item,index) in adList'
			:key='index'
			>
				<img :src="item.imgUrl" />
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	props:{
		adList:Array
	}
}
</script>

<style scoped>
.ad{
	width: 100%;
	height:165px;
	/* height: 2.986666rem; */
}
.ad img{
	width: 90%;
	height:165px;
}
</style>
