<script setup>
import { onMounted } from "vue";
import ProductCard from "./ProductCard.vue";
import { useProductStore } from "../stores/products";

const store = useProductStore();

onMounted(() => {
  store.load();
});
</script>

<template>
  <section>
    <p v-if="loading">Cargando Productos</p>
    <p v-else-if="error">Error al cargar productos</p>
    <ul v-else>
      <li v-for="p in store.products" :key="p.id">
        {{ p.title }} - {{ p.price }}€
      </li>
    </ul>
  </section>
</template>
<style scoped></style>
