<template>
  <div class="empty-page">
    <img
      class="empty-page__img"
      src="@/assets/img/face-orders.png"
      alt="Грустный смайлик"
    />
    <h2 class="empty-page__title">У вас нет заказов</h2>
    <p class="empty-page__message">Оформите хотя бы один заказ.</p>
    <router-link to="/">
      <BaseButton />
    </router-link>
  </div>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue'
</script>
