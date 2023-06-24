<script setup>
defineProps({
  id: String,
  label: String,
  type: String,
  value: String,
  errorMessage: String
})
</script>

<template>
  <div class="relative w-full">
    <label
      :for="id"
      class="absolute px-2 text-sm rounded -top-2 bg-slate-100 left-2 text-slate-500"
      >{{ label }}</label
    >

    <input
      :class="`w-full p-2 border rounded bg-slate-100 ${
        errorMessage ? 'border-red-700' : 'border-slate-400'
      } focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 `"
      :type="type"
      :id="id"
      :value="value"
      @input="$emit('handleInputChange', $event)"
    />

    <p v-if="errorMessage" class="mt-1 text-sm text-right text-red-700">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
input[type='date']::-webkit-calendar-picker-indicator {
  background-color: transparent;
  background-image: url('../assets/calendar.png');
  background-size: cover;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
