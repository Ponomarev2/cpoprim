<script setup>
import { ref } from 'vue'
</script>

<template>
  <div>
    <a href="https://admkrai.krasnodar.ru/">
      <img
        class="banner-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8r-fjngJtdAe9ixyanCBJG6-1nso-pK_IVQ&usqp=CAU"
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
}

.banner-img:hover {
  filter: brightness(0.8);
}
</style>
