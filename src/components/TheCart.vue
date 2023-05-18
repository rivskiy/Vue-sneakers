<template>
  <div class="overlay">
    <div class="cart">
      <h2>Корзина</h2>
      <ul class="cart___list">
        <TheCartItem
          v-for="cartItem in cartItems"
          :key="cartItem"
          :cart-item="cartItem"
          @remove-cart-item="removeCartItem(cartItem)"
        />
      </ul>
      <ul class="cost">
        <li class="cost__item">
          <span>Итого:</span>
          <div></div>
          <span>25 998 руб.</span>
        </li>
        <li class="cost__item">
          <span>Налог 5%:</span>
          <div></div>
          <span>1299 руб.</span>
        </li>
      </ul>
      <button class="cart__btn" type="button">Оформить заказ</button>
    </div>
  </div>
</template>

<script setup>
import TheCartItem from '@/components/TheCartItem.vue';
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cartItems = computed(()=> store.getters.CART)

function removeCartItem(cartItem) {
  store.dispatch('REMOVE_CART_ITEM', cartItem)
}
</script>

<style>
</style>