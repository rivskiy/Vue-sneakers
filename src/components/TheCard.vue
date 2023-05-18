<template>
  <li class="card">
    <img class="card__img" :src="require(`@/assets/img/sneakers/${product.img}`)" alt="Sneakers" />
    <h3 class="card__title">{{ product.title }}</h3>
    <div class="card__bottom">
      <div>
        <p class="card__subtitle">Цена</p>
        <p class="card__price">{{ product.price }} руб.</p>
      </div>
      <button class="add-btn" type="button" @click="emit('addToCart', product)">
        <BaseIcon name="add" />
        <span class="visually-hidden">Добавить в корзину</span>
      </button>
    </div>
    <button class="like-btn like-btn--active" type="button" @click="emit('addToFavourites', product)">
      <BaseIcon name="like" />
    </button>
  </li>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  product: {
    type: Object,
    require: true
  }
})

const emit = defineEmits(['addToCart', 'addToFavourites'])
</script>

<style>
</style>