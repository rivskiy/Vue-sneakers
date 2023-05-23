<template>
  <main class="main-wrapper">
    <section>
      <div class="cards-header">
        <h1 class="page-title">Все кроссовки</h1>
        <div class="search">
          <BaseIcon name="search" />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <ul class="cards">
        <TheCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </ul>
    </section>
  </main>
</template>

<script setup>
import TheCard from "@/components/TheCard";
import BaseIcon from "@/components/UI/BaseIcon.vue";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();

const getProducts = () => store.dispatch("GET_PRODUCTS");
onMounted(getProducts);

const products = computed(() => store.getters.PRODUCTS);
</script>

<style lang="scss">
.cards-header {
  margin-bottom: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search {
  padding: 0 15px;
  display: flex;
  align-items: center;

  border: 1px solid #f3f3f3;
  border-radius: 10px;
  & input {
    width: 200px;
    padding: 10px;

    font-family: inherit;
    font-size: 16px;
    border: none;
  }
  & input:focus {
    outline: none;
  }
}

@media (max-width: 768px) {
  .cards-header {
    flex-direction: column;
    row-gap: 30px;
  }
  .search {
    width: 100%;
  }
}
@media (max-width: 425px) {
  .cards-header {
    row-gap: 15px;
    margin-bottom: 20px;
  }
}
</style>