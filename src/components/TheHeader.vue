<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="logo" />
      <div class="logo__container">
        <h2 class="logo__title">Vue sneakers</h2>
        <p class="logo__description">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="menu">
      <li class="menu__sum" @click="emit('showCart')">
        <BaseIcon name="cart" class="menu__icon"/>
        <span>1205 руб.</span>
      </li>
      <li>
        <BaseIcon name="like" class="menu__icon"/>
        <span class="visually-hidden">Закладки</span>
      </li>
      <li>
        <BaseIcon name="user" class="menu__icon"/>
        <span class="visually-hidden">Профиль</span>
      </li>
    </ul>
  </header>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";

const emit = defineEmits(['showCart'])
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
  justify-content: space-between;
  align-items: center;
  &__sum {
    display: flex;
    &:hover {
      cursor: pointer;
    }
  }
  &__icon {
    stroke: #9B9B9B;
  }
  & span {
    margin-left: 10px;

    font-weight: 600;
    color: #9d9d9d;
  }
}
</style>