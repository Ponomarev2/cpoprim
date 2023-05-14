<script setup>
import { ref } from 'vue'
import PostMini from './PostMini.vue'

</script>

<template>
  <div class="container">
    <PostMini v-for="(item, i) in [1, 2, 3, 4, 5]" :key="i" />
  </div>
</template>

<style scoped></style>
