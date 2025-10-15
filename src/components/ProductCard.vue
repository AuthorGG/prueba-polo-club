<script setup>
defineProps({
  product: { type: Object },
  required: true,
});
</script>
<template>
  <article>
    <img :src="product.image" :alt="product.title" loading="lazy" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.price }}</p>
    <button>add to cart</button>
  </article>
</template>
<style></style>
