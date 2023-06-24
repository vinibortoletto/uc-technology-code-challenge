<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="flex flex-col items-center justify-center gap-2 mt-40 mb-4">
    <div class="flex gap-4">
      <!-- GitHub Icon -->
      <a href="https://github.com/vinibortoletto" target="_blank">
        <Icon icon="mdi:github" class="text-xl transition hover:text-sky-500" />
      </a>

      <!-- LinkedIn Icon -->
      <a href="https://linkedin.com/in/vinicius-bortoletto" target="_blank">
        <Icon icon="ri:linkedin-fill" class="text-xl transition hover:text-sky-500" />
      </a>
    </div>

    <!-- Text -->
    <p>Desenvolvido por <span class="font-bold">Vinicius Bortoletto</span></p>
  </footer>
</template>
