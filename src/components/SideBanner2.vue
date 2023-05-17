<script setup>
import { ref } from 'vue'
</script>

<template>
  <div>
    <a href="https://minobrnauki.gov.ru/">
      <img
        class="banner-img"
        src="https://minobrnauki.gov.ru/local/templates/minobr/images/dest/logo.svg"
      />
    </a>
  </div>
</template>

<style scoped>
.banner-img {
  height: 100px;
  width: 100%;
  aspect-ratio: initial;
  z-index: 5;
  background-color: white;
  padding: 5px;
}

.banner-img:hover {
  filter: brightness(0.8);
}
</style>
