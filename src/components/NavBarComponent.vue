<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();
const menuOpen = ref(false);
</script>

<template>
  <header>
    <nav class="navbar">
      <div
        class="hamgurger-wrapper"
        @mouseenter="menuOpen = true"
        @mouseleave="menuOpen = false"
      >
        <div class="hamgurger">☰</div>
        <ul v-show="menuOpen" class="dropdown">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/collection">Collection</RouterLink></li>
        </ul>
      </div>

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
.hamburger-wrapper {
  position: relative;
}

.hamburger {
  font-size: 1.8rem;
  cursor: pointer;
  user-select: none;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.1);
}

.dropdown {
  position: absolute;
  top: 70%;
  left: 0.8;
  background-color: #2a2f38;
  border-radius: 8px;
  list-style: none;
  padding: 2rem 2rem;
  margin: 0;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.2s ease;
}

.dropdown li {
  padding: 0.4rem 0;
}

.dropdown a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  display: block;
}

.dropdown a:hover {
  color: #ffd369;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
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
