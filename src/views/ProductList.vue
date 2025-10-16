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
      :space-between="16"
      :navigation="true"
      :pagination="{ clickable: true }"
      :loop="false"
      :breakpoints="{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }"
    >
      <SwiperSlide v-for="p in store.products" :key="p.id">
        <ProductCard :product="p" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<style scoped>
/* .product-swiper {
  padding: 0.5rem 0 1rem;
  padding-bottom: 4rem;
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  justify-items: center;
  padding: 1rem;
} */

.collection {
  padding: 0 8px;
}

/* reserva espacio para la paginación y la separa de las cards */
.product-swiper {
  padding-bottom: 36px;
}
:deep(.swiper-pagination) {
  bottom: 0 !important;
}

/* centra cada tarjeta dentro del slide (todas igual de anchas) */
.slide-center {
  display: flex;
  justify-content: center;
  align-items: stretch;
}
</style>
