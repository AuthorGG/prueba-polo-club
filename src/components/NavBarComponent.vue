<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/collection">Collection</RouterLink>
    <RouterLink to="/cart"
      ><div class="cart">
        🛒 {{ cart.count }} ({{ cart.total }}€)
      </div></RouterLink
    >
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}
.cart {
  font-weight: 600;
}
</style>
