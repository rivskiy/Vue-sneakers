<template>
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  >
  </svg>
</template>

<script>
import icons from "@/icons";
export default {
  props: ['name', 'width', 'height'],
  data() {
    return {
      path: icons[this.name],
    };
  },
};
</script>

<style>
</style>