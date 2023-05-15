<script setup>
import PageHeader from '../components/PageHeader.vue'
import PostBody from '../components/PostBody.vue'
</script>

<template>
  <main>
    <PageHeader class="page-header" title="Post" />
    <PostBody class="body"/>
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