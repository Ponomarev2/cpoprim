<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['id', 'header', 'content', 'date'])
</script>

<template>
  <div class="container">
    <div class="date">{{ props.date ? props.date : '21-03-2023' }}</div>
    <RouterLink v-if="props.header" :to="'/post/' + props.id" :id="props.id">
      {{ props.header }}
    </RouterLink>
    <RouterLink v-else="props.header" to="/post/1">Заголовок</RouterLink>
    <div class="text">
      {{
        props.content
          ? props.content
          : 'Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный - рассмотрение текста как особой формы представления информации о внешней тексту действительности.'
      }}
    </div>
  </div>
</template>

<style scoped>
.container {
  cursor: default;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  background-color: white;
  margin-top: 20px;
}

.container:hover {
  background-color: silver;
  transition: all 500ms;
}

.text {
  color: #444444;
  height: 100%;
  font-size: 18px;
  line-height: 1.5em;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

a {
  width: fit-content;
  color: #333333;
  font-size: 30px;
  font-weight: bold;
}
a:hover {
  color: black;
  text-decoration: underline;
  transition: all 0.4s;
}
</style>
