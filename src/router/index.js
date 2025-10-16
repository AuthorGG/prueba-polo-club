import { createRouter, createWebHistory } from "vue-router";

import ProductList from "../views/ProductList.vue";
import CartView from "../views/CartView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/collection",
      name: "Collection",
      component: ProductList,
    },
    { path: "/cart", name: "Cart", component: CartView },
  ],
});

export default router;
