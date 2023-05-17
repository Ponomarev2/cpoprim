<script setup>
import PostGrid from '../components/PostGrid.vue'
import PageHeader from '../components/PageHeader.vue'
import '../components/NewsData.js'

const news = [
  {
    id: 1,
    header: 'Заголовок 1',
    content: 'Содержание новости 1',
    date: '21.01.2023'
  },
  {
    id: 2,
    header: 'Заголовок 2',
    content: 'Содержание новости 2',
    date: '21.01.2023'
  },
  {
    id: 3,
    header: 'Заголовок 3',
    content: 'Содержание новости 3',
    date: '21.01.2023'
  },
  {
    id: 4,
    header: 'Заголовок 4',
    content: 'Содержание новости 4',
    date: '21.01.2023'
  }
]
</script>

<template>
  <main>
    <PageHeader class="page-header" title="Новости" />
    <PostGrid class="grid" :items="news" />
  </main>
</template>

<style scoped>
.grid {
  margin: 40px;
}
.page-header {
  height: fit-content;
}
</style>
