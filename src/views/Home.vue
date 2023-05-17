<script setup>
import PostGrid from '../components/PostGrid.vue'
import PageHeader from '../components/PageHeader.vue'
import Banner1 from '../components/Banner1.vue'
</script>

<template>
  <main>
    <PageHeader class="page-header" title="Главная" />
    <Banner1 class="banner1" />
    <PostGrid class="grid" />
  </main>
</template>

<style scoped>
.grid {
  margin: 30px;
  margin-left: 40px;
  margin-right: 40px;
}

.banner1 {
  margin: 30px;
  margin-left: 40px;
  margin-right: 40px;
}

.page-header {
  height: fit-content;
}
</style>
