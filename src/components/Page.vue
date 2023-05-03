<script setup>
import MenuTree from './MenuTree.vue'
import Menu from './Menu.vue'

</script>


<template>
  <div class="page">
    <div class="head">
      <div class="logo">МКУ "Центр поддержки образования" МО Приморско-Ахтарский район</div>
    </div>
    <div class="body">
      <div class="side-nav">
        <MenuTree/>
      </div>
      <div class="content">
        <!-- <Menu/> -->
      </div>
    </div>
    <div class="foot">
      <div>| | Приморско-Ахтарск | |</div>
      <div>2023</div>
    </div>
  </div>
  
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');

.page{
  display: block;
  justify-content: center;
  width: 900px;
  background-color: bisque;
  font-family: 'EB Garamond', serif;
}

.head{
  background-color: orange;
}

.logo {
  color: black;
  display: flex;
  align-items: center;
  text-align: left;
  height: 200px;
  background: repeat;
  font-size: 3.2em;
}

.foot{
  color:black;
  background-color: palevioletred;
  text-align: center;
}

.body{
  display: flex;
  min-height: 900px;
}

.side-nav{
  width: 230px;
  min-height: 900px;
  height: 100%;
  background-color: pink;
}

.content{
  width: calc(100% - 230px);
  min-height: 900px;
  height: 100%;
  background-color: greenyellow;
}


</style>
