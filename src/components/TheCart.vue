<template>
  <div class="overlay" @click="emit('hideCart')">
    <div class="cart">
      <h2 class="cart__title">Корзина</h2>
      <ul class="cart___list">
        <TheCartItem
          v-for="cartItem in cartItems"
          :key="cartItem"
          :cart-item="cartItem"
          @remove-cart-item="removeCartItem(cartItem)"
        />
      </ul>
      <ul>
        <li class="cost-item">
          <span>Итого:</span>
          <div class="cost-item__dots"></div>
          <span>25 998 руб.</span>
        </li>
        <li class="cost-item">
          <span>Налог 5%:</span>
          <div class="cost-item__dots"></div>
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

const emit = defineEmits(['hideCart'])

const store = useStore()

const cartItems = computed(()=> store.getters.CART)

function removeCartItem(cartItem) {
  store.dispatch('REMOVE_CART_ITEM', cartItem)
}
</script>

<style lang="scss">

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
}

.cart {
  position: absolute;
  right: 0;

  width: 420px;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  &__title {
    margin: 0;
    font-size: 24px;
  }
  &___list {
    flex: 1;
  }
  &__btn {
    width: 100%;
    padding: 18px 0;

    font-size: 16px;
    font-weight: 600;
    color: #fff;

    background-color: #9DD458;
    border-radius: 18px;
  }
}

.cost-item {
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
  &__dots {
    flex: 1;
    margin: 0 10px;
    border-bottom: 1px dashed #dfdfdf;
  }
}
</style>