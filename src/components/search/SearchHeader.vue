<template>
	<header>
		<div class="return">
			<i class="iconfont icon-fanhui"></i>
		</div>
		<div class="search-main">
			<i class="iconfont icon-fangdajing"></i>
			<form action="" onsubmit='return false'>
				<input type="search" placeholder="Ich Suche...">
			</form>
				
		</div>
		<div class="search-button">suchen</div>
	</header>
</template>

<script>
</script>

<style scoped>
header{
	display: flex;
	justify-content: space-around;
	align-items:  center;
	color: #fff;
	background-color: #b0352f;
	width: 100%;
	height: 44px;
}
.return, .search-button{
	padding: 6px 5px;
}
.return i{
	padding: 6px 5px;
	font-size: 16px;
}
.search-main{
	display: flex;
	align-items: center;
	width:260px;
	padding: 6px 4px;
	border-radius: 20px;
	background-color: #fff;
}
.search-main i{
	color: #666;
	padding: 3px 3px;
}
.search-main form{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}
.search-main form input{
	width: 100%;
	font-size: 15px;
}
.search-button{
	font-size: 17px;
}
</style>