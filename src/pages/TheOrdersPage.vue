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
      <button class="clear-btn" @click="clearOrders(products)">
        Очистить историю покупок
      </button>
    </div>
    <ul class="orders__list" v-for="(order, index) in products" :key="index">
      <li>
        <p class="orders__number">Заказ #{{ index + 1 }}</p>
        <ul class="cards">
          <TheCard
            v-for="product in order"
            :key="product.id"
            :product="product"
          />
        </ul>
      </li>
    </ul>
  </section>
  <TheEmptyOrders v-if="!products[0] && !isLoading"/>
  <BaseLoader v-if="isLoading"/>
</template>
<script setup>
import BaseIcon from "@/components/UI/BaseIcon.vue";
import TheEmptyOrders from "@/components/TheEmptyOrders.vue";
import TheCard from "@/components/TheCard.vue";
import BaseLoader from "@/components/UI/BaseLoader.vue";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();

const getOrders = () => store.dispatch("GET_ORDERS");
onMounted(getOrders);

const products = computed(() => store.getters.ORDERS);
const isLoading = computed(() => store.state.isLoading);

const clearOrders = (products) =>
  store.dispatch("CLEAR_ORDERS", products.length);
</script>

<style lang="scss" scoped>
.orders {
  height: 100%;
  &__header {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  &__list {
    margin-bottom: 20px;
  }
  &__number {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
}
.clear-btn {
  margin-left: auto;
  padding: 12px 10px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border-radius: 18px;
  background-color: #fd6a6a;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #f73232;
  }
}

@media (max-width: 768px) {
.clear-btn {
  padding: 10px 8px;

  font-size: 10px;
}
}

@media (max-width: 425px) {
  .clear-btn {
    position: absolute;
    right: 0;
    bottom: -150%;
  }
}

</style>