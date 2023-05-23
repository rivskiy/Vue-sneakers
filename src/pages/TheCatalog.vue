<template>
  <section class="main-wrapper">
    <div class="cards-header">
      <h1 class="page-title">Все кроссовки</h1>
      <BaseSelect
        class="select"
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
      />
      <div class="search">
        <BaseIcon name="search" />
        <input type="text" placeholder="Поиск" />
      </div>
    </div>
    <ul class="cards" v-if="!isLoading">
      <TheCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </ul>
    <BaseLoader v-if="isLoading" />
  </section>
</template>

<script setup>
import TheCard from "@/components/TheCard";
import BaseSelect from "@/components/UI/BaseSelect.vue";
import BaseIcon from "@/components/UI/BaseIcon.vue";
import BaseLoader from "@/components/UI/BaseLoader.vue";
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";

const store = useStore();

const getProducts = () => store.dispatch("GET_PRODUCTS");
onMounted(getProducts);

const products = computed(() => store.getters.PRODUCTS);
const isLoading = computed(() => store.state.isLoading);

const categories = [
  {
    name: "Все",
    value: "all",
  },
  {
    name: "Мужские",
    value: "men",
  },
  {
    name: "Женские",
    value: "women",
  },
];
const selected = ref("Категории");
const sortedProducts = ref([]);
const filteredProducts = computed(() =>
  sortedProducts.value.length ? sortedProducts.value : products.value
);
const sortByCategories = (category) => {
  sortedProducts.value = [];
  products.value.map((item) => {
    if (item.category === category.value) {
      sortedProducts.value.push(item);
    }
  });
  selected.value = category.name;
};
</script>

<style lang="scss">
.cards-header {
  margin-bottom: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.select {
  margin-left: auto;
  margin-right: 10px;
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
    row-gap: 20px;
  }
  .select {
    order: 1;
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