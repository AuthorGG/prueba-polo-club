<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();
</script>

<template>
  <header>
    <nav class="navbar">
      <ul class="nav-left">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/collection">Collection</RouterLink></li>
      </ul>

      <ul class="nav-right">
        <li>
          <RouterLink to="/cart">({{ cart.totalItems }}) 🛒</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background-color: #1b2129;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-left,
.nav-right {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0rem 2rem;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
}

a:hover {
  text-decoration: underline;
}
</style>
