<script setup>

import { ref, reactive } from 'vue'
import MenuElem from './MenuElem.vue'

const elems = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]);

</script>


<template>
  <div class="menu">
    <MenuElem v-for="(item, i) in elems"
      :key="item.id"
      :label="'elem' + item.id"
    />
  </div>
</template>


<style scoped>

.menu{
  display: flex;
  flex-direction: column;
  width: 230px;
}

</style>
