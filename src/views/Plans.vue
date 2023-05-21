<script setup>
import PageHeader from '../components/PageHeader.vue'
import YandexMap from '../components/YandexMap.vue'

const props = defineProps(['id'])
</script>

<template>
  <main>
    <PageHeader class="page-header" title="Контакты" />
    <div class="body">
      <h3>Телефон:</h3>
      <label>123-123-2453</label>
      <h3>Адрес:</h3>
      <label>улица Ленина, 27, Приморско-Ахтарск, Краснодарский край</label>
      <div class="map">
        <YandexMap />
      </div>
    </div>
  </main>
</template>

<style scoped>
.page-header {
  height: fit-content;
}

.body {
  margin: 40px;
  line-height: 1.5em;
}

h3 {
  margin-top: 10px;
}

.map {
  margin-top: 1em;
}
</style>
