<template>
  <header>
    <h1>
      <img src="@/assets/images/logo.png" alt="" />
    </h1>
    <div class="search">
      <i class="iconfont icon-fangdajing"></i>
      <span>I search ...</span>
    </div>
    <div class="kefu">
      <i class="iconfont icon-kefu"></i>
    </div>
  </header>
</template>

<script></script>

<style scoped>
header {
  display: flex;
  position: fixed;
  background-color: #b0352f;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  align-items: center;
}
header h1 {
  width: 20%;
  height: 50px;
}
header h1 img {
  width: 100%;
  height: 100%;
}
.search {
  display: flex;
  align-items: center;
  width: 65%;
  height: 40px;
  background-color: #fff;
  border-radius: 12px;
  margin-left: 15px;
}
.search i {
  padding: 0 6px;
  color: #ccc;
}
.search span {
  font-size: 14px;
  color: #ccc;
}
.kefu i {
  font-size: 36px;
  color: #fff;
  margin-left: 10px;
}
</style>
