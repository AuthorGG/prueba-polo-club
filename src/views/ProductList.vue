<script setup>
import { onMounted, computed, ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { useProductStore } from "../stores/products";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SearchBar from "../components/SearchBar.vue";

const store = useProductStore();
const modules = [Navigation, Pagination];

const searchTerm = ref("");
onMounted(() => {
  store.load();
});
const filteredProducts = computed(() => {
  if (!searchTerm.value.trim()) {
    return store.products;
  }
  return store.products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>

<template>
  <section>
    <h1>Collection</h1>
    <SearchBar v-model="searchTerm" />
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
      <SwiperSlide v-for="p in filteredProducts" :key="p.id">
        <ProductCard :product="p" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<style scoped>
.collection {
  padding: 0 8px;
}

.product-swiper {
  padding-top: 0.8rem;
  padding-bottom: 36px;
}
:deep(.swiper-pagination) {
  bottom: 0 !important;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fff;
  background: rgba(0, 0, 0, 0.555);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  transform: scale(0.7);
  font-size: 16px !important;
  font-weight: bold;
  margin: 0;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(0, 0, 0, 0.7);
  color: #ffb11f;
  font-size: 16px !important;
}

.slide-center {
  display: flex;
  justify-content: center;
  align-items: stretch;
}
</style>
