<script setup>
import { ref } from 'vue'

const props = defineProps(['title'])
</script>

<template>
  <div class="box">
    <h1>{{ props.title }}</h1>
  </div>
</template>

<style scoped>
.box {
  background-color: cadetblue;
  text-align: left;
  text-indent: 40px;
}
</style>
