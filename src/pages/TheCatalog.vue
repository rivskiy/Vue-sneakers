<template>
  <section class="main-wrapper">
    <div class="cards-header">
      <h1 class="page-title">
        {{ isSearch ? `Поиск по запросу:` : "Все кроссовки" }}
      </h1>
      <BaseSelect
        class="select"
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
      />
      <div class="search">
        <BaseIcon name="search" />
        <input
          type="text"
          placeholder="Поиск"
          v-model="searchValue"
          @keydown.enter="search(searchValue)"
        />
      </div>
      <p class="search-result" v-if="isSearch">
        {{ searchResult }}
        <button
          class="icon-btn close-btn"
          type="button"
          @click="resetSearchResult"
        >
          <BaseIcon name="remove" />
        </button>
      </p>
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
import { categories } from "@/constants";
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";

const store = useStore();

// product

const getProducts = () => store.dispatch("GET_PRODUCTS");
onMounted(getProducts);

const products = computed(() => store.getters.PRODUCTS);

const isLoading = computed(() => store.state.isLoading);

// filter

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

// search

const searchValue = ref("");
const searchResult = ref("");
const isSearch = ref(false);

const search = (value) => {
  sortedProducts.value = filteredProducts.value.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  searchResult.value = searchValue.value;
  searchValue.value = "";
  isSearch.value = true;
};

const resetSearchResult = () => {
  isSearch.value = false;
  sortedProducts.value = products.value;
  searchResult.value = "";
};
</script>

<style lang="scss">
.cards-header {
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-result {
  position: absolute;
  left: 20px;
  bottom: 0;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 6px;

  border: 2px solid #dadada;
  border-radius: 6px;

  & button {
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }
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
    width: 100%;
    padding: 10px;

    font-family: inherit;
    font-size: 16px;
    border: none;
  }
  & input:focus {
    outline: none;
  }
}
@media (max-width: 1024px) {
  .search {
    width: 200px;
  }
}
@media (max-width: 768px) {
  .cards-header {
    flex-direction: column;
    row-gap: 10px;
    & h1 {
      order: 2;
    }
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