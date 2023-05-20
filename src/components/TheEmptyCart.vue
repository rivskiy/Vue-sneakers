<template>
  <div class="cart-state">
    <img
      class="cart-state__img"
      src="@/assets/img/empty-cart.jpg"
      alt="Пустая корзина"
    />
    <h3 class="cart-state__title">Корзина пустая</h3>
    <p class="cart-state__message">
      Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
    </p>
    <BaseButton class="cart-state__btn" @click="showCart"/>
  </div>
</template>

<script setup>
import BaseButton from "@/components/UI/BaseButton.vue";
import { useStore } from "vuex";

const store = useStore();

const showCart = () => store.commit('SHOW_CART')

</script>

<style lang="scss">

</style>