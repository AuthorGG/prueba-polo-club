<script setup>
defineProps({
  product: { type: Object },
  required: true,
});
</script>
<template>
  <article>
    <img :src="product.image" :alt="product.title" loading="lazy" />
    <h1>{{ product.title }}</h1>
    <p>{{ product.price }}</p>
    <button>add to cart</button>
  </article>
</template>
<style></style>
