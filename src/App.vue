<template>
  <div class="wrapper">
    <Header/>
    <Cart v-show="showCart"/>
    <router-view/>
  </div>
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
.wrapper {
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;

  background: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
}
</style>