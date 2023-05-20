<template>
    <section class="orders" v-if="products[0]">
      <div class="orders__header">
        <router-link to="/">
          <button class="icon-btn orders-btn" type="button">
            <BaseIcon name="chevron" />
            <span class="visually-hidden">Вернуться</span>
          </button>
        </router-link>
        <h1 class="page-title">Мои покупки</h1>
      </div>
      <ul class="cards">
        <TheCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-cart-item="addCartItem(product)"
          @add-favorites="addFavorites(product)"
        />
      </ul>
    </section>
    <TheEmptyOrders else/>
</template>
<script setup>
import BaseIcon from "@/components/BaseIcon.vue";
import TheEmptyOrders from '@/components/TheEmptyOrders.vue'
import TheCard from '@/components/TheCard.vue'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

const store = useStore()

// const getOrders = () => store.dispatch('GET_ORDERS')
// onMounted(getOrders)

const products = computed(() => store.getters.ORDERS)

const addCartItem = product => store.dispatch('ADD_CART_ITEM', product)

const addFavorites = product => store.dispatch('ADD_FAVORITES', product)
</script>

<style lang="scss">
.orders {
  height: 100%;
  &__header {
    display: flex;
    align-items: center;
  }
}

.orders-btn {
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