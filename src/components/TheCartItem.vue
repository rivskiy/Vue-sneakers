<template>
  <li class="cart-item">
    <img
      class="cart-item__img"
      :src="require(`@/assets/img/sneakers/${cartItem.img}`)"
      alt="Sneakers"
    />
    <div class="cart-item__text">
      <h3 class="cart-item__name">{{ cartItem.title }}</h3>
      <p class="cart-item__price">{{ cartItem.price }} руб.</p>
    </div>
    <button
      class="icon-btn remove-btn"
      @click="emit('removeCartItem', cartItem)"
    >
      <BaseIcon name="remove" />
    </button>
  </li>
</template>

<script setup>
import BaseIcon from "@/components/UI/BaseIcon.vue";

defineProps({
  cartItem: {
    type: Object,
    require: true,
  },
});

const emit = defineEmits(["removeCartItem"]);
</script>

<style lang="scss">

.cart-item {
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;

  border: 1px solid #f3f3f3;
  border-radius: 20px;
  overflow: hidden;
  &__img {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }
  &__text {
    width: 150px;
  }
  &__name {
    margin: 0;
    margin-bottom: 5px;

    font-size: 14px;
    font-weight: 400;
  }
  &__price {
    margin: 0;

    font-weight: 700;
  }
}

.remove-btn {
  margin-left: auto;

  border: 2px solid #dadada;
  & svg {
    stroke-width: 3px;
  }
  &:hover {
    background-color: #FF8585;
    & svg {
      stroke: #fff;
    }
  }
}
</style>