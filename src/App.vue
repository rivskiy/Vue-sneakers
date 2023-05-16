<template>
  <div class="wrapper">
    <Header/>
    <Cart style="display: none;"/>
    <router-view/>
  </div>
</template>

<script setup>
import Header from '@/components/TheHeader'
import Cart from '@/components/TheCart'
</script>

<style>
</style>