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
import {computed, ref} from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const showCart = computed(() => store.state.showCart)

</script>

<style lang="scss">
.main {
  flex: 1;
  padding: 60px;
  padding-bottom: 0;
}
</style>