<template>
    <section class="orders" v-if="false">
      <div class="orders__header">
        <router-link to="/">
          <button class="icon-btn orders-btn" type="button">
            <BaseIcon name="chevron" />
            <span class="visually-hidden">Вернуться</span>
          </button>
        </router-link>
        <h1 class="page-title">Мои покупки</h1>
      </div>
      <ul></ul>
    </section>
    <TheEmptyOrders/>
</template>
<script setup>
import BaseIcon from "@/components/BaseIcon.vue";
import TheEmptyOrders from '@/components/TheEmptyOrders.vue'
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