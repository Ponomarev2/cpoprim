<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <div class="container">
    <div class="date">21-01-2023</div>
    <h1>Заголовок</h1>
    <div class="text">
      <p>
        Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо
        материальном носителе человеческая мысль; в общем плане связная и полная последовательность
        символов.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: lime;
  margin-top: 20px;
}
.text {
  font-size: 18px;
  line-height: 1.5em;
}
h1 {
}
</style>
