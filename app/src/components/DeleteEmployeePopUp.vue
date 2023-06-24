<script setup>
defineProps({
  employee: {
    id: Number,
    nome: String,
    sobrenome: String
  }
})
</script>

<template>
  <div class="fixed top-0 left-0 z-50 w-full h-full bg-slate-800/20">
    <div
      class="fixed w-full max-w-md p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2"
    >
      <h3 class="text-lg font-bold">
        Tem certeza de que quer remover
        <span class="text-sky-500">{{ employee.nome }} {{ employee.sobrenome }}</span> ?
      </h3>

      <h4 class="italic text-orange-600">Esta ação não pode ser desfeita!</h4>

      <div class="flex justify-center gap-2 mt-4">
        <button
          type="button"
          @click="$emit('togglePopUp')"
          class="w-40 p-2 font-bold transition rounded bg-slate-300 text-slate-600 hover:bg-slate-300/80"
        >
          Cancelar
        </button>
        <button
          type="button"
          @click="$emit('deleteEmployee', $event, employee.id)"
          class="w-40 p-2 font-bold text-white transition bg-red-700 rounded hover:bg-red-700/80"
        >
          Deletar
        </button>
      </div>
    </div>
  </div>
</template>
