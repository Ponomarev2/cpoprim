<script setup>
import PostGrid from '../components/PostGrid.vue'
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <main>
    <PageHeader class="page-header" title="News" />
    <PostGrid class="grid" />
  </main>
</template>

<style scoped>

.grid {
  margin-left: 40px;
  margin-bottom: 40px;
}
.page-header {
  height: fit-content;
}

</style>

