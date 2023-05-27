<script setup>
import PageHeader from '../components/PageHeader.vue'
import PostBody from '../components/PostBody.vue'

const props = defineProps(['id'])
</script>

<template>
  <main>
    <PageHeader class="page-header" title="Горячие линии" />
    <div class="body">
      <div class="t1">
        <h2>
          ТЕЛЕФОНЫ "ГОРЯЧЕЙ ЛИНИИ" ПО ОРГАНИЗАЦИИ ОБРАЗОВАТЕЛЬНОГО ПРОЦЕССА С ПРИМЕНЕНИЕМ
          ДИСТАНЦИОННЫХ ТЕХНОЛОГИЙ И ЭЛЕКТРОННОГО ОБУЧЕНИЯ
        </h2>
      </div>
      <div class="t2">
        <h2>
          "Горячая линия" управления образования администрации МО Приморско-Ахтарский район,
          ответственное лицо заместитель начальника управления образования:
        </h2>
        <div class="t2-1"><b>8-918-222-19-11</b></div>
      </div>
      <div class="t3">
        <h2>
          "Горячие линии" министерства по организации образовательного процесса c применением
          дистанционных технологий и электронного обучения:
        </h2>
        <ul>
          <li>
            Для общеобразовательных организаций:
            <ul>
              <li>8(961)581-90-68</li>
              <li>8(861)298-25-91</li>
            </ul>
          </li>
          <li>
            Методическое сопровождение:
            <ul>
              <li>8(967)654-35-53</li>
              <li>8(861)232-29-45</li>
            </ul>
          </li>
          <li>
            Техническое сопровождение:
            <ul>
              <li>8(967)654-66-65</li>
              <li>8(861)260-27-54</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page-header {
  height: fit-content;
}

.t1 > h2 {
  font-weight: bold;
  color: red;
  text-align: center;
}
.t2-1 {
  text-align: center;
  font-size: 20px;
}

h2 {
  font-size: 20px;
  font-weight: normal;
  line-height: 1.5em;
}

.body {
  font-family: 'Montserrat';
  margin: 40px;
  text-align: left;
}

.body > div {
  margin-bottom: 20px;
}

ul {
  font-size: 20px;
  list-style-type: none;
}

.t3 > ul > li {
  margin-top: 10px;
}
.t3 > ul > li > ul > li {
  font-weight: bold;
}

</style>
