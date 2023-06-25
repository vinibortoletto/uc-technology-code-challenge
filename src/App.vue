<script setup>
import { AppHeader, AppFooter } from './components'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Transition name="initial" appear>
      <AppHeader />
    </Transition>

    <Transition name="route">
      <RouterView />
    </Transition>

    <Transition name="initial" appear>
      <AppFooter class="flex-shrink-0" />
    </Transition>
  </div>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
}

.route-enter-to {
  opacity: 1;
}

.route-enter-active {
  transition: all 0.5s ease;
}

.initial-enter-from {
  opacity: 0;
}

.initial-enter-to {
  opacity: 1;
}

.initial-enter-active {
  transition: all 0.5s ease;
}
</style>
