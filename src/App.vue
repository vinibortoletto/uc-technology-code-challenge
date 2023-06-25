<script setup>
import { AppHeader, AppFooter } from './components'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Transition name="fade" appear>
      <AppHeader />
    </Transition>

    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <Transition name="fade" appear>
      <AppFooter class="flex-shrink-0" />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s ease;
}
</style>
