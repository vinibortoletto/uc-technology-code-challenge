<script setup>
import { AppHeader, AppFooter } from './components'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <main class="flex-grow w-full px-4 mx-auto">
      <RouterView />
    </main>

    <AppFooter class="flex-shrink-0" />
  </div>
</template>
