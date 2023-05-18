<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="#dadada"
    v-html="patch"
  >
  </svg>
</template>

<script>
import icons from "@/icons";
export default {
  props: ["name"],
  data() {
    return {
      patch: icons[this.name],
    };
  },
};
</script>

<style>
</style>