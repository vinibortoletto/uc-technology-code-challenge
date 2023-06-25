<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-sm p-6 mx-auto text-center rounded-lg">
    <h1 class="text-6xl font-bold">Erro 404</h1>
    <h2 class="mb-6 font-bold">Página não encontrada</h2>
    <RouterLink
      to="/"
      class="p-2 transition border rounded border-sky-500 text-sky-500 hover:bg-sky-500/5"
      >Voltar para página principal</RouterLink
    >
  </div>
</template>
