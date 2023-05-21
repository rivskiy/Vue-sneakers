<template>
    <section class="orders" v-if="products[0]">
      <div class="orders__header">
        <router-link to="/">
          <button class="icon-btn back-btn" type="button">
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
        />
      </ul>
    </section>
    <TheEmptyOrders v-if="!products[0]"/>
</template>
<script setup>
import BaseIcon from "@/components/BaseIcon.vue";
import TheEmptyOrders from '@/components/TheEmptyOrders.vue'
import TheCard from '@/components/TheCard.vue'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

const store = useStore()

const getOrders = () => store.dispatch('GET_ORDERS')
onMounted(getOrders)

const products = computed(() => store.getters.ORDERS)

</script>

<style lang="scss">
.orders {
  height: 100%;
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
}
</style>