<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="logo" />
        <div class="logo__container">
          <h2 class="logo__title">Vue sneakers</h2>
          <p class="logo__description">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>
    <ul class="menu">
      <li class="menu__cart" @click="showCart">
        <span class="quantity" v-if="cartQuantity">{{ cartQuantity }}</span>
        <BaseIcon name="cart" class="menu__icon" />
        <span class="menu__sum">{{ cartSum }} руб.</span>
      </li>
      <li class="menu__favorites">
        <router-link to="/favorites">
          <BaseIcon name="like" class="menu__icon" />
          <span class="visually-hidden">Избранное</span>
        </router-link>
      </li>
      <li class="menu__orders">
        <router-link to="/orders">
          <BaseIcon name="user" class="menu__icon" />
          <span class="visually-hidden">Профиль</span>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const showCart = () => store.commit("SHOW_CART");

const cartSum = computed(() => store.getters.CART_SUM);
const cartQuantity = computed(() => store.getters.CART_QUANTITY);
</script>

<style lang="scss">
.header {
  padding: 45px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
}

.logo {
  display: flex;
  align-items: center;
  & img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
  &__title,
  &__description {
    margin: 0;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }
  &__description {
    color: #9d9d9d;
  }
}

.menu {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: end;
  &__cart {
    position: relative;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
  &__icon {
    stroke: #9b9b9b;
  }
  &__sum {
    position: relative;
    margin-left: 10px;

    font-weight: 600;
    color: #9d9d9d;
  }
  &__favorites {
    margin-left: auto;
  }
  &__orders {
    margin-left: 30px;
  }
  & svg {
    width: 24px;
    height: 24px;
  }
}
.quantity {
  position: absolute;
  left: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
  font-weight: 600;
  color: #fff;

  border-radius: 50%;
  background-color: #1a9e32;
  transform: translateX(-100%);
}
</style>