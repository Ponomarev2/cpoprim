<script setup>
import { ref } from 'vue'
import PostMini from './PostMini.vue'

const props = defineProps(['count', 'items'])
</script>

<template>
  <div class="container">
    <PostMini
      v-if="props.items"
      v-for="(item, i) in props.items"
      :key="i"
      :id="item.id"
      :header="item.header"
      :content="item.content"
      :date="item.date"
    />
    <PostMini v-else v-for="(item, i) in [...Array(5).keys()]" />
  </div>
</template>

<style scoped>
.container {
}
</style>
