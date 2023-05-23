<template>
    <Header/>
    <Cart/>
    <main class="main">
      <router-view/>
    </main>
</template>

<script setup>
import Header from '@/components/TheHeader'
import Cart from '@/components/TheCart'

</script>

<style lang="scss">
.main {
  flex: 1;
  padding: 60px;
}

@media (max-width: 768px) {
  .main {
    padding: 20px;
  }
}
@media (max-width: 425px) {
  .main {
    padding: 15px 10px;
  }
}
</style>