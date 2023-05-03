<script setup>

const props = defineProps(['label']);

</script>


<template>
  <div class="menu-elem">
      {{ props['label'] }}
  </div>
  
</template>


<style scoped>


.menu-elem{
  width: 100%;
  height: 28px;
  color: #000;
  font-size: medium;
  outline: 1px solid black;
  cursor: pointer;
  text-indent: 5px;
}

.menu-elem:hover{
  background-color: lightgray;
}

</style>
