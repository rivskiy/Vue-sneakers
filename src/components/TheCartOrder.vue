<template>
  <div class="cart-state">
    <img
      class="cart-state__img"
      src="@/assets/img/complete-order.jpg"
      alt="Заказ оформлен"
    />
    <h3 class="cart-state__title cart-state__title--order">Заказ оформлен!</h3>
    <p class="cart-state__message">
      Ваш заказ #18 скоро будет передан курьерской доставке
    </p>
    <BaseButton class="cart-state__btn" @click="showCart"/>
  </div>
</template>

<script setup>
import BaseButton from "@/components/UI/BaseButton.vue";
import { useStore } from "vuex";

const store = useStore();

const showCart = () => store.commit("SHOW_CART");
</script>

<style lang="scss">
</style>