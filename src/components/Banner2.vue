<script setup>
import { ref } from 'vue'
</script>

<template>
  <div>
    <div class="pos-banner-fluid bf-23">
      <div class="bf-23__decor">
        <div class="bf-23__logo-wrap">
          <img
            alt="Госуслуги"
            class="bf-23__logo"
            src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg"
          />
          <div class="bf-23__slogan">Решаем вместе</div>
        </div>
      </div>

      <div class="bf-23__content">
        <div class="bf-23__text">
          Есть предложения по организации учебного процесса или знаете, как сделать школу лучше?
        </div>

        <div class="bf-23__bottom-wrap">
          <div class="bf-23__btn-wrap">
            <!-- pos-banner-btn_2 не удалять; другие классы не добавлять --><button
              class="pos-banner-btn_2"
              type="button"
            >
              Написать о проблеме
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner1-img {
  height: 150px;
  width: 600px;
}
</style>
