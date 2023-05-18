<script setup>
import PageHeader from '../components/PageHeader.vue'
import PostBody from '../components/PostBody.vue'

const props = defineProps(['id'])
</script>

<template>
  <main>
    <!-- <PageHeader class="page-header" title="Статья" /> -->
    <PostBody class="body" :id="props.id" />
  </main>
</template>

<style scoped>
.page-header {
  height: fit-content;
}

.body {
  margin: 40px;
}
</style>
