<template>
  <section class="favorites" v-if="products[0]">
    <div class="favorites__header">
      <router-link to="/">
        <button class="icon-btn back-btn" type="button">
          <BaseIcon name="chevron" />
          <span class="visually-hidden">Вернуться</span>
        </button>
      </router-link>
      <h1 class="page-title">Мои закладки</h1>
    </div>
    <ul class="cards">
      <TheCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </section>
  <TheEmptyFavorites v-if="!products[0]" />
</template>
<script setup>
import BaseIcon from "@/components/UI/BaseIcon.vue";
import TheEmptyFavorites from "@/components/TheEmptyFavorites.vue";
import TheCard from "@/components/TheCard.vue";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();

const getFavorites = () => store.dispatch("GET_FAVORITES");
onMounted(getFavorites);

const products = computed(() => store.getters.FAVORITES);
</script>

<style lang="scss">
.favorites {
  height: 100%;
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
}
</style>