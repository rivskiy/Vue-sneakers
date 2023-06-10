<template>
  <header class="header">
    <router-link to="/">
      <TheLogo />
    </router-link>
    <ul class="header__menu menu">
      <li class="menu__cart" @click="showCart">
        <span class="menu__quantity" v-if="cartQuantity">{{
          cartQuantity
        }}</span>
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
import TheLogo from "@/components/TheLogo.vue";
import BaseIcon from "@/components/UI/BaseIcon.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const showCart = () => store.commit("SHOW_CART");

const cartSum = computed(() => store.getters.CART_SUM);
const cartQuantity = computed(() => store.getters.CART_QUANTITY);
</script>

<style lang="scss" scoped>
.header {
  padding: 45px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
}

.menu {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  &__quantity {
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

@media (max-width: 768px) {
  .header {
    padding: 30px;
  }
  .menu {
    width: 100px;
    justify-content: space-between;
    &__sum {
      display: none;
    }
    &__sum,
    &__favorites,
    &__orders {
      margin: 0;
    }
  }
}

@media (max-width: 425px) {
  .header {
    padding: 20px;
    flex-direction: column;
    align-items: center;
    &__menu {
      position: fixed;
      bottom: 0;
      z-index: 1;
    }
  }
  .menu {
    height: 50px;
    background-color: #fff;
    width: 100%;
    justify-content: space-around;
    border-top: 1px solid #eaeaea;
    & svg {
      width: 30px;
      height: 30px;
    }
  }
}
</style>