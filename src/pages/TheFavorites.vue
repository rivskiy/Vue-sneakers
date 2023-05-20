<template>
    <section class="favorites" v-if="false">
      <div class="favorites__header">
        <router-link to="/">
          <button class="icon-btn favorites-btn" type="button">
            <BaseIcon name="chevron" />
            <span class="visually-hidden">Вернуться</span>
          </button>
        </router-link>
        <h1 class="page-title">Мои закладки</h1>
      </div>
      <ul></ul>
    </section>
    <TheEmptyFavorites/>
</template>
<script setup>
import BaseIcon from "@/components/BaseIcon.vue";
import TheEmptyFavorites from "@/components/TheEmptyFavorites.vue";
</script>

<style lang="scss">
.favorites {
  height: 100%;
  &__header {
    display: flex;
    align-items: center;
  }
}

.favorites-btn {
  margin-right: 20px;
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
</style>