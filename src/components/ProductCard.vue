<script setup>
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
defineProps({
  product: { type: Object },
  required: true,
});
</script>
<template>
  <article class="card">
    <div class="thumb">
      <img :src="product.image" :alt="product.title" loading="lazy" />
    </div>

    <h2 class="title">{{ product.title }}</h2>

    <div class="prices">
      <p class="product-now">{{ product.price }} €</p>
    </div>

    <div class="actions">
      <button @click="cart.addToCart(product)" class="btn">Add to cart</button>
    </div>
  </article>
</template>

<style scoped>
:root {
  --card-w: 260px;
  --card-h: 420px;
}

.card {
  background: rgba(58, 21, 3, 0.596);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.02);
}

.thumb {
  width: 100%;
  aspect-ratio: 4 / 5;
  background: #f6f6f6;
  border-radius: 12px;
  display: grid;
  place-items: center;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.thumb img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.25s ease;
}

.pcard:hover .thumb img {
  transform: scale(1.04);
}

.title {
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2em;
}

.prices {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.price-now {
  font-size: 1.2rem;
  color: #1a73e8;
  font-weight: bold;
}

.actions {
  margin-top: auto;
  display: flex;
  justify-content: center;
}

.btn {
  background: #111;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn:hover {
  background: #333;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  :root {
    --card-w: 220px;
    --card-h: 380px;
  }
}
@media (max-width: 640px) {
  :root {
    --card-w: 180px;
    --card-h: 320px;
  }
}
</style>
