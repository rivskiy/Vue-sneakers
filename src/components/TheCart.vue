<template>
  <div class="overlay" @click.self="showCart">
    <div class="cart-container">
      <div class="cart" v-if="cartItems[0] && !ordered">
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
        <button class="cart-btn" type="button" @click="ordered = true">Оформить заказ</button>
      </div>
      <TheEmptyCart v-else-if="!cartItems[0]"/>
      <TheCartOrder v-if="ordered"/>
    </div>
  </div>
</template>

<script setup>
import TheCartItem from "@/components/TheCartItem.vue";
import TheEmptyCart from "@/components/TheEmptyCart.vue";
import TheCartOrder from '@/components/TheCartOrder.vue';
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const cartItems = computed(() => store.getters.CART);

const removeCartItem = cartItem => store.dispatch("REMOVE_CART_ITEM", cartItem);

const showCart = () => store.commit('SHOW_CART')

const ordered = ref(false)

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

.cart-container {
  position: absolute;
  right: 0;

  width: 420px;
  height: 100%;
  padding: 30px;

  background-color: #fff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
}

.cart {
  height: 100%;

  display: flex;
  flex-direction: column;
  &__title {
    margin: 0;
    font-size: 24px;
  }
  &___list {
    flex: 1;
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