<script setup>
import AppHeader from './components/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />

  <main class="max-w-3xl px-4 mx-auto">
    <RouterView />
  </main>
</template>
