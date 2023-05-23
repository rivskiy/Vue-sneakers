<template>
  <div class="v-select">
    <p class="title" @click="optionsVisible = !optionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="optionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
defineProps({
  options: {
    type: Array,
    default: [],
  },
  selected: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["select"]);

let optionsVisible = ref(false);

const selectOption = (option) => {
  emit("select", option);
  optionsVisible.value = !optionsVisible.value
};
</script>

<style lang="scss" scoped>
.v-select {
  position: relative;
  width: 100px;
  cursor: pointer;
  text-align: left;
  
}
.title {
  padding: 10px;
  border: 1px solid #f3f3f3;
  border-radius: 10px;

}
.v-select p {
  margin: 0;
}

.options {
  position: absolute;
  z-index: 1;
  top: 30px;
  left: 0;

  width: 100%;
  padding: 8px;
  padding-top: 0;

  border: solid 1px #f3f3f3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #ffffff;
  & p {
    padding: 8px;
  }
  & p:hover {
  background: #e7e7e7;
}
}
.optionsVisible {
  display: block;
}
</style>