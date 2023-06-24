<script setup>
import logo from '../assets/uc-logo.png'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex justify-center p-4 mb-14">
    <!-- Logo -->
    <RouterLink to="/">
      <img class="w-40" :src="logo" alt="logo da empresa uc technology" />
    </RouterLink>
  </header>
</template>
