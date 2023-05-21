<template>
  <div class="overlay" @click.self="showCart" >
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
          <div class="cost">
            <span>Итого:</span>
            <div class="cost__dots"></div>
            <span class="cost__sum">{{ cartSum }} руб.</span>
          </div>
        <button class="cart-btn" type="button" @click="onOrder(cartItems)">
          Оформить заказ
        </button>
      </div>
      <TheEmptyCart v-else-if="!cartItems[0]" />
      <TheCartOrder v-if="ordered" />
    </div>
  </div>
</template>

<script setup>
import TheCartItem from "@/components/TheCartItem.vue";
import TheEmptyCart from "@/components/TheEmptyCart.vue";
import TheCartOrder from "@/components/TheCartOrder.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const getCart = () => store.dispatch("GET_CART");
onMounted(getCart);

const cartItems = computed(() => store.getters.CART);
const cartSum = computed(() => store.getters.CART_SUM);

const removeCartItem = (cartItem) =>
  store.dispatch("REMOVE_CART_ITEM", cartItem);

const showCart = () => store.commit("SHOW_CART");
const ordered = ref(false);

const onOrder = (orderItems) => {
  store.dispatch("ADD_ORDER", orderItems);
  store.dispatch("CLEAR_CART", orderItems.length);
};
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
    margin-bottom: 20px;
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