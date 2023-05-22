<template>
    <Header/>
    <Cart v-show="showCart"/>
    <main class="main">
      <router-view/>
    </main>
</template>

<script setup>
import Header from '@/components/TheHeader'
import Cart from '@/components/TheCart'
import { onStopScroll } from './utils';
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const showCart = computed(() => {
  onStopScroll(store.state.stateCart.isShow)
  return store.state.stateCart.isShow
})

</script>

<style lang="scss">
.main {
  flex: 1;
  padding: 60px;
}
</style>