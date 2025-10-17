import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("wishlist")) || [],
  }),
  getters: {
    count: (state) => state.items.length,
    isInWishlist: (state) => (productId) => {
      return state.items.some((p) => p.id === productId);
    },
  },
  actions: {
    toggleWishlist(product) {
      if (!product || !product.id) return;
      const index = this.items.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.items.splice(index, 1);
      } else {
        this.items.push(product);
        console.log(product);
      }
      localStorage.setItem("wishlist", JSON.stringify(this.items));
    },
  },
});
