<template>
  <button class="base-btn" type="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke-width="0.1"
    >
      <path
        fill-rule="evenodd"
        d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
        clip-rule="evenodd"
      />
    </svg>
    Вернуться назад
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.base-btn {
  position: relative;
  width: 245px;
  padding: 18px 0;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border-radius: 18px;
  background-color: #9dd458;
  &:hover {
    background-color: #99ee31;
  }
  & svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    stroke: #fff;
  }
}
</style>