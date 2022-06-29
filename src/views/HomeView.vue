<template>
  <div class="home">
	  <Header></Header>
	  this is homepage.
	  <Tabbar></Tabbar>
  
  
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import Tabbar from '@/components/commen/Tabbar.vue'
export default {
  name: "HomeView",
  components:{
	  Header,
	  Tabbar
  }
};
</script>
