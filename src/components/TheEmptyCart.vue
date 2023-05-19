<template>
  <div class="empty">
    <img
      class="empty__img"
      src="@/assets/img/empty-cart.jpg"
      alt="Пустая корзина"
    />
    <h3 class="empty__title">Корзина пустая</h3>
    <p class="empty__message">
      Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
    </p>
    <button class="cart-btn empty-btn" type="button" @click="showCart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke-width="0.1"
      >
        <path
          fill-rule="evenodd"
          d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
          clip-rule="evenodd"
        />
      </svg>
      Вернуться назад
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const showCart = () => store.commit('SHOW_CART')

</script>

<style lang="scss">
.empty {
  height: 100%;
  padding: 0 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  text-align: center;
  &__img {
    width: 120px;
  }
  &__title {
    font-size: 22px;
  }
  &__message {
    color: #808080;
  }
  &-btn {
    position: relative;
    & svg {
      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      stroke: #fff;
    }
  }
}
</style>