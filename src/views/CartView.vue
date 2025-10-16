<script setup>
import { onMounted } from "vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();
</script>

<template>
  <section class="cart-container">
    <h1 class="cart-title">🛒 Carrito</h1>

    <p v-if="cart.items.length === 0" class="empty">Tu carrito está vacío...</p>

    <ul v-else class="cart-list">
      <li v-for="item in cart.items" :key="item?.id" class="cart-item">
        <img
          v-if="item?.image"
          :src="item.image"
          :alt="item.title"
          width="50"
          class="item-img"
        />
        <div class="item-info">
          <h2 class="item-title">{{ item?.title }}</h2>
          <p class="item-price">{{ item?.price }} €</p>
        </div>
      </li>
    </ul>

    <footer v-if="cart.items.length > 0" class="cart-footer">
      <p class="total-items">
        Total de productos: <strong>{{ cart.totalItems }}</strong>
      </p>
      <p class="subtotal">
        Subtotal:
        <strong
          >{{
            cart.items.reduce((t, i) => t + i.price, 0).toFixed(2)
          }}
          €</strong
        >
      </p>

      <button @click="cart.clearCart" class="btn-clear">Vaciar carrito</button>
    </footer>
  </section>
</template>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.cart-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.cart-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.total-items {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #444;
}

.item-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px solid #eee;
}

.item-info {
  flex: 1;
}

.item-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.item-price {
  font-weight: 600;
  margin: 0.25rem 0;
}

.remove {
  font-size: 0.9rem;
  color: #c00;
  cursor: pointer;
  text-decoration: underline;
}

.empty {
  text-align: center;
  padding: 2rem;
  font-size: 1rem;
  color: #777;
}

.cart-footer {
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.subtotal {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.cart-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.btn-outline {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #111;
  background: transparent;
  cursor: pointer;
}

.btn-dark {
  flex: 1;
  padding: 0.8rem;
  border: none;
  background: #111;
  color: #fff;
  cursor: pointer;
}

.btn-clear {
  background: transparent;
  border: none;
  color: #c00;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: underline;
}
</style>
