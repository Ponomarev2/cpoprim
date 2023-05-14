<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <div class="container">
    <div class="date">21-01-2023</div>
    <h1>Заголовок</h1>
    <div class="text">
      Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо
      материальном носителе человеческая мысль; в общем плане связная и полная последовательность
      символов.
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 150px;
  background-color: peru;
  margin-top: 20px;
}
.text {
  text-indent: -4px;
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
h1 {
}
</style>
