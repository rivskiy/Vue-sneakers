<template>
  <div class="logo">
    <img src="@/assets/img/logo.png" alt="logo" />
    <div class="logo__container">
      <h2 class="logo__title">Vue sneakers</h2>
      <p class="logo__description">Магазин лучших кроссовок</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
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
</style>