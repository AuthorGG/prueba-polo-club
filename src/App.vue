<script setup>
import { RouterView } from "vue-router";
import NavBarComponent from "./components/NavBarComponent.vue";
</script>

<template id="app">
  <NavBarComponent />
  <RouterView />
</template>

<style scoped></style>
