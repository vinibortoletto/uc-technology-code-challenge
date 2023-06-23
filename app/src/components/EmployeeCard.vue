<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  employee: {
    nome: String,
    sobrenome: String,
    cargo: String
  }
})

const capitalizeText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}
</script>

<template>
  <div class="flex items-center gap-4 p-6 text-xl transition bg-white shadow hover:shadow-md">
    <div class="p-1 border-4 rounded-full border-sky-500 full">
      <Icon icon="solar:user-bold" class="text-5xl text-sky-500" />
    </div>

    <div>
      <p>
        <span>Funcionário: </span>
        <span class="font-bold">{{ employee.nome }} {{ employee.sobrenome }}</span>
      </p>

      <p>
        <span>Cargo: </span>
        <span class="font-bold">{{ capitalizeText(employee.cargo) }}</span>
      </p>
    </div>
  </div>
</template>
