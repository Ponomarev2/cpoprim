<script setup>
import MenuTree from './MenuTree.vue'
import PostGrid from './PostGrid.vue'
import PageHeader from './PageHeader.vue'
</script>

<template>
  <div class="page">
    <div class="top">
      <a href="/">
        <div class="logo" >
          МКУ "Центр поддержки образования" <br />
          МО Приморско-Ахтарский район
        </div>
      </a>
    </div>
    <div class="body">
      <div class="aside">
        <div class="blind-mode">
          <img src="../assets/slabovidyashie-3.png" />
          <label>Версия для слабовидящих</label>
        </div>
        <MenuTree />
      </div>
      <div class="content">
        <PageHeader class="page-header" title="Home" />
        <PostGrid class="grid" />
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@400;700&display=swap');

.page {
  display: block;
  justify-content: center;
  width: 1000px;
  background-color: bisque;
  font-family: 'Montserrat', sans-serif;
  margin: 7px;
}

.top {
  background-color: orange;
}

.logo {
  color: black;
  display: flex;
  align-items: center;
  text-align: left;
  height: 150px;
  background: repeat;
  font-size: 40px;
  line-height: normal;
  margin-left: 2em;
}

.foot {
  color: black;
  background-color: orange;
  text-align: center;
}

.body {
  display: flex;
  height: fit-content;
}

.aside {
  width: 230px;
  min-height: 900px;
  height: max-content;
  background-color: burlywood;
  color: blue;
  overflow-y: clip;
}

.content {
  width: calc(100% - 230px);
  min-height: 900px;
  height: fit-content;
  background-color: greenyellow;
  font-family: 'PT Serif', serif;
}

.blind-mode {
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  background-color: white;
  border: 1px solid gray;
}

.blind-mode:hover {
  cursor: pointer;
  transition: all 200ms;
  filter: blur(5px);
}

.blind-mode > img {
  height: 100px;
  width: 100%;
}

.blind-mode > label {
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
}

.grid {
  margin-left: 40px;
  margin-bottom: 40px;
}
.page-header {
  height: fit-content;
}
</style>
