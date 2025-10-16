<script setup>
import { onMounted } from "vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();
</script>

<template>
  <section>
    <h1>🛒 Carrito</h1>

    <p v-if="cart.items.length === 0">Tu carrito está vacío</p>

    <ul v-else>
      <li v-for="item in cart.items" :key="item?.id">
        <img
          v-if="item?.image"
          :src="item.image"
          :alt="item.title"
          width="50"
        />
        <span>{{ item?.title }} - {{ item?.price }} €</span>
      </li>
    </ul>

    <p>
      <strong>Total de productos: {{ cart.totalItems }}</strong>
    </p>
    <button @click="cart.clearCart">Vaciar carrito</button>
  </section>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
