<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

watch(inputValue, (val) => {
  emit("update:modelValue", val);
});

watch(
  () => props.modelValue,
  (val) => {
    if (val !== inputValue.value) {
      inputValue.value = val;
    }
  }
);
</script>

<template>
  <input
    v-model="inputValue"
    type="text"
    placeholder="Buscar producto..."
    class="searchbar"
  />
</template>

<style scoped>
.searchbar {
  display: block;
  margin: 1rem auto;
  padding: 0.6rem 1rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}
</style>
