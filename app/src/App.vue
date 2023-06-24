<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />

  <main class="px-4 mx-auto">
    <RouterView />
  </main>

  <AppFooter />
</template>
