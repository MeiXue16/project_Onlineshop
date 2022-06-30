<template>
  <div class="home">
    <Header></Header>
	<ly-tabs v-model="value">
	  <ly-tab-item name="1" title="Recommend" />
	  <ly-tab-item name="2" title="Black Tea" />
	  <ly-tab-item name="3" title="Green Tea" />
	  <ly-tab-item name="4" title="Oolong Tea" />
	  <ly-tab-item name="5" title="White Tea" />
	  <ly-tab-item name="6" title="Pu-erh" />
	  <ly-tab-item name="7" title="Yellow Tea" />
	  <ly-tab-item name="8" title="Dark Tea" />  
	</ly-tabs>
	

	
	
	
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/home/Header.vue";
import Tabbar from "@/components/commen/Tabbar.vue";
export default {
  name: "HomeView",
  data() {
      return  {
        value: '1',
		activeColor: '#b0352f'
      }
    },
  components: {
    Header,
    Tabbar,
  },
};
</script>

<style scoped>
.ly-tabs{
	postion:fixed;
	top:60px;
	left:0;
}
::v-deep .ly-tabbar{
	box-shadow: none;
	border-bottom: none;
}
</style>
