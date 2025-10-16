<script setup>
import { onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { useProductStore } from "../stores/products";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const store = useProductStore();
const modules = [Navigation, Pagination];
onMounted(() => {
  store.load();
});
</script>

<template>
  <section>
    <p v-if="store.loading">Cargando Productos</p>
    <p v-else-if="store.error">Error al cargar productos</p>
    <Swiper
      v-else
      class="product-swiper"
      :modules="modules"
      :space-between="0.7"
      :navigation="true"
      :pagination="{ clickable: true }"
      :breakpoints="{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
    >
      <SwiperSlide v-for="p in store.products" :key="p.id">
        <ProductCard :product="p" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<style scoped>
.product-swiper {
  padding: 0.5rem 0 1rem;
  padding-bottom: 4rem;
}
</style>
