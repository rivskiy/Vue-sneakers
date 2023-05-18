<template>
  <div class="wrapper">
    <Header @show-cart="showCart = !showCart"/>
    <Cart v-show="showCart" @hide-cart="showCart = !showCart"/>
    <router-view/>
  </div>
</template>

<script setup>
import Header from '@/components/TheHeader'
import Cart from '@/components/TheCart'
import {ref} from 'vue'

const showCart = ref(false)
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