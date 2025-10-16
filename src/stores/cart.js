import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cart"))?.filter((p) => p) || [],
  }),
  getters: {
    totalItems: (state) => state.items.length,
  },
  actions: {
    addToCart(product) {
      if (!product || !product.id) return;
      this.items.push(product);
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
    clearCart() {
      this.items = [];
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
  },
});
