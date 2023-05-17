<!-- <template>
  <Home/>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template> -->

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import MenuTree from './components/MenuTree.vue'
import SideBanner1 from './components/SideBanner1.vue'
import SideBanner2 from './components/SideBanner2.vue'
import SideBanner3 from './components/SideBanner3.vue'
import Home from './views/Home.vue'
</script>

<template>
  <div class="page">
    <div class="top">
      <RouterLink to="/">
        <div class="logo">
          МКУ "Центр поддержки образования" <br />
          МО Приморско-Ахтарский район
        </div>
      </RouterLink>
    </div>
    <div class="body">
      <div class="aside">
        <div class="blind-mode">
          <img src="./assets/slabovidyashie-3.png" />
          <label>Версия для слабовидящих</label>
        </div>
        <MenuTree />
        <div class="aside-banners">
          <SideBanner1 />
          <SideBanner2 />
          <SideBanner3 />
        </div>
      </div>
      <div class="content">
        <RouterView />
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
  transition: all 900ms;
}

.top {
  background-color: slategray;
}

.logo {
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  text-align: left;
  height: 150px;
  background: repeat;
  font-size: 40px;
  line-height: normal;
  padding: 2em;
}
.logo:hover {
  background-color: steelblue;
}
.foot {
  color: black;
  background-color: darkgray;
  text-align: center;
}

.body {
  display: flex;
}

.aside {
  display: block;
  width: 230px;
  min-height: 900px;
  background-color: lightsteelblue;
  overflow-y: clip;
}

.content {
  width: calc(100% - 230px);
  min-height: 900px;
  height: auto;
  background-color: gainsboro;
  font-family: 'PT Serif', serif;
}

.blind-mode {
  margin-bottom: 20px;
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
  filter: blur(1px);
}

.blind-mode > label {
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
}

.aside-banners {
  margin: 5px;
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;
}

.aside-banners > div {
  margin-top: 5px;
}
</style>
