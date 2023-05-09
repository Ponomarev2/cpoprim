<script setup>
import MenuTree from './MenuTree.vue'
import Post from './Post.vue'
import PageTitle from './PageTitle.vue'

</script>


<template>
  <div class="page">
    <div class="top">
      <div class="logo">МКУ "Центр поддержки образования" <br> МО Приморско-Ахтарский район</div>
    </div>
    <div class="body">
      <div class="aside">
        <div class="blind-mode">
          <img src="../assets/slabovidyashie-3.png"/>
          <label>Версия для слабовидящих</label>
        </div>
        <MenuTree/>
      </div>
      <div class="content">
        <PageTitle :title="'Hello world!'"/>
        <Post/>
      </div>
    </div>
    <div class="foot">
      <div>| | Приморско-Ахтарск | |</div>
      <div>2023</div>
    </div>
  </div>
  
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=PT+Sans:wght@400;700&family=PT+Serif:wght@400;700&display=swap');

.page{
  display: block;
  justify-content: center;
  width: 1000px;
  background-color: bisque;
  font-family: 'PT Sans', sans-serif;
}

.top{
  background-color: orange;
}

.logo {
  color: black;
  display: flex;
  align-items: center;
  text-align: left;
  height: 150px;
  background: repeat;
  font-size: 3em;
  line-height: normal;
  margin-left: 0.5em;
}

.foot{
  color:black;
  background-color: orange;
  text-align: center;
}

.body{
  display: flex;
  min-height: 900px;
  height: fit-content;
  font-family: 'PT Serif', serif;
}

.aside{
  width: 230px;
  min-height: 900px;
  height: fit-content;
  background-color: pink;
  color: blue;
}

.content{
  width: calc(100% - 230px);
  min-height: 900px;
  height: fit-content;
  background-color: greenyellow;
}

.blind-mode{
  width: 100%;
  text-align: center;
  background-color: white;
  border: 2px solid gray;
}

.blind-mode:hover{
  cursor: pointer;
  transition: all 200ms;
  filter: blur(5px);
}

.blind-mode > img{
  height: 100px;
  width: 100%;
}

.blind-mode > label{
  font-size: larger;
  font-family: 'PT Sans', serif;
  color: #000;
  line-height: 2em;
  border: none;
  outline: none;

}


</style>
