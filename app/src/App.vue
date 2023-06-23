<script setup>
import AppHeader from './components/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />

  <main class="px-4">
    <RouterView />
  </main>
</template>
