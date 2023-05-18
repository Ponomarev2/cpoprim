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
  background-color: #dddddd;
  text-align: center;
  /* border-top: 1px solid gray; */
}
</style>
