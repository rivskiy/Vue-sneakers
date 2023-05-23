<template>
  <div
    :class="{ overlay: 'overlay', overlayVisible: isShow }"
    @click.self="showCart"
  >
    <div class="cart-container">
      <div class="cart" v-if="cartSum > 0">
        <div class="cart__header">
          <h2 class="cart__title">Корзина</h2>
          <button type="button" class="icon-btn close-btn" @click="showCart">
            <BaseIcon name="remove" />
            <span class="visually-hidden">Закрыть корзину</span>
          </button>
        </div>
        <ul class="cart___list">
          <TheCartItem
            v-for="cartItem in cartItems"
            :key="cartItem"
            :cart-item="cartItem"
            @remove-cart-item="removeCartItem(cartItem)"
          />
        </ul>
        <div class="cost">
          <span>Итого:</span>
          <div class="cost__dots"></div>
          <span class="cost__sum">{{ cartSum }} руб.</span>
        </div>
        <button class="cart-btn" type="button" @click="onOrder(cartItems)">
          Оформить заказ
        </button>
      </div>
      <TheEmptyCart v-if="!isOrdered" />
      <TheCartOrder v-if="isOrdered" />
    </div>
  </div>
</template>

<script setup>
import TheCartItem from "@/components/TheCartItem.vue";
import TheEmptyCart from "@/components/TheEmptyCart.vue";
import TheCartOrder from "@/components/TheCartOrder.vue";
import BaseIcon from "./UI/BaseIcon.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isShow = computed(() => store.state.stateCart.isShow);

const getCart = () => store.dispatch("GET_CART");
onMounted(getCart);

const cartItems = computed(() => store.getters.CART);
const cartSum = computed(() => store.getters.CART_SUM);
const isOrdered = computed(() => store.state.stateCart.isOrdered);

const removeCartItem = (cartItem) =>
  store.dispatch("REMOVE_CART_ITEM", cartItem);

const showCart = () => store.commit("SHOW_CART");

const onOrder = (orderItems) => {
  store.dispatch("ADD_ORDER", orderItems);
  store.dispatch("CLEAR_CART", orderItems.length);
};
</script>

<style lang="scss">
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.1s ease-out, visibility 0.1s ease-out;
  overflow: hidden;
}

.overlayVisible {
  visibility: visible;
  opacity: 1;
  .cart-container {
    transform: translateX(0);
  }
}

.close-btn {
  border: 2px solid #dadada;
  & svg {
    height: 16px;
    stroke-width: 3px;
  }
  &:hover {
    background-color: #dadada;
    & svg {
      stroke: #fff;
    }
  }
}

.cart-container {
  position: absolute;
  right: 0;

  width: 420px;
  height: 100%;
  padding: 30px;

  background-color: #fff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.cart {
  height: 100%;

  display: flex;
  flex-direction: column;
  &__header {
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
  }
  &__title {
    margin: 0;
    font-size: 24px;
  }
  &___list {
    flex: 1;
    padding-right: 10px;
    margin-bottom: 20px;
    overflow: auto;
  }
}

.cost {
  display: flex;
  align-items: baseline;
  margin-bottom: 30px;
  &__dots {
    flex: 1;
    margin: 0 10px;
    border-bottom: 1px dashed #dfdfdf;
  }
  &__sum {
    font-weight: 700;
  }
}
</style>