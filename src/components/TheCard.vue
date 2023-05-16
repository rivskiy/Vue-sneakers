<template>
  <ul class="cards">
    <li class="card">
      <img class="card__img" src="@/assets/img/sneakers/1.jpg" alt="Sneakers" />
      <h3 class="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
      <div class="card__bottom">
        <div>
          <p class="card__subtitle">Цена</p>
          <p class="card__price">12 999 руб.</p>
        </div>
        <button class="add-btn" type="button">
          <BaseIcon name="add"/>
          <span class="visually-hidden">Добавить в корзину</span>
        </button>
      </div>
      <button class="like-btn like-btn--active" type="button">
        <BaseIcon name="like"/>
      </button>
    </li>
  </ul>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";
const components = {
  BaseIcon,
};
</script>

<style>
</style>