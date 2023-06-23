<script setup>
defineProps({
  id: String,
  label: String,
  type: String,
  value: String
})
</script>

<template>
  <div class="relative">
    <label
      :for="id"
      class="absolute px-2 text-sm rounded -top-2 bg-slate-100 left-2 text-slate-500"
      >{{ label }}</label
    >

    <input
      class="w-full p-2 border rounded bg-slate-100 border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
      :type="type"
      :id="id"
      @input="$emit('handleInputChange', $event)"
    />
  </div>
</template>
