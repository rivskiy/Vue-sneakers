<template>
  <main class="main-wrapper">
    <section>
      <div class="cards-header">
        <h1 class="cards-header__title">Все кроссовки</h1>
        <div class="search">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
              stroke="#E4E4E4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <ul class="cards">
        <Card
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart(product)"
          @add-to-favourites="addToFavourites(product)"
        />
      </ul>
    </section>
  </main>
</template>

<script setup>
import Card from '@/components/TheCard'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

const store = useStore()

const getProducts = () => store.dispatch('GET_PRODUCTS_FROM_API')
onMounted(getProducts)

const products = computed(() => store.getters.PRODUCTS)

const addToCart = product => store.dispatch('ADD_TO_CART', product)

const addToFavourites = product => store.dispatch('ADD_TO_FAVOURITES', product)

</script>

<style lang="scss">

.main-wrapper {
  height: 100%;
  padding: 60px;
  padding-bottom: 0;
}

.cards-header {
  margin-bottom: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  &__title {
    font-size: 32px;
    font-weight: 700;
  }
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

</style>