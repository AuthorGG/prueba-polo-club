<script setup>
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
defineProps({
  product: { type: Object },
  required: true,
});

function addToCart(product) {
  cart.addToCart(product);
}
</script>
<template>
  <article class="card">
    <img :src="product.image" :alt="product.title" loading="lazy" />
    <h2 class="product-title">{{ product.title }}</h2>
    <p class="product-price">{{ product.price }}</p>
    <button @click="addToCart()">add to cart</button>
  </article>
</template>
<style>
.card {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1rem;
  width: 220px;
  height: 340px;
  margin: auto;
  justify-content: space-between;
}

.card img {
  width: 100%;
  max-height: 180px;
  aspect-ratio: auto;
  object-fit: contain;
}
.product-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.5em;
}

.product-price {
  font-weight: 600;
}
button {
  margin-top: auto;
}
</style>
