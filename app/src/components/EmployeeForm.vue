<script setup>
import { ref } from 'vue'

const formValues = ref({
  firstName: '',
  lastName: '',
  role: '',
  startDate: ''
})
</script>

<template>
  <h1 class="mb-4 text-3xl font-bold text-center text-sky-700">Cadastrar funcionário</h1>

  <form class="flex flex-col gap-4">
    <div class="relative">
      <label
        for="firstName"
        class="absolute px-2 text-sm rounded -top-2 bg-slate-100 left-2 text-slate-500"
        >Nome</label
      >

      <input
        class="w-full p-2 border rounded bg-slate-100 border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="text"
        id="firstName"
        v-model="formValues.firstName"
      />
    </div>

    <div class="relative">
      <label
        for="lastName"
        class="absolute px-2 text-sm rounded -top-2 bg-slate-100 left-2 text-slate-500"
        >Sobrenome</label
      >

      <input
        class="w-full p-2 border rounded bg-slate-100 border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="text"
        id="lastName"
        v-model="formValues.lastName"
      />
    </div>

    <div class="relative">
      <label
        for="role"
        class="absolute px-2 text-sm rounded -top-2 bg-slate-100 left-2 text-slate-500"
        >Cargo</label
      >

      <input
        class="w-full p-2 border rounded bg-slate-100 border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="text"
        id="role"
        v-model="formValues.role"
      />
    </div>

    <div class="relative">
      <label
        for="date"
        class="absolute px-2 text-sm rounded -top-2 bg-slate-100 left-2 text-slate-500"
        >Data de início</label
      >

      <input
        class="w-full p-2 border rounded bg-slate-100 border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="date"
        id="startDate"
        v-model="formValues.startDate"
      />
    </div>

    <button type="submit" class="p-2 font-bold rounded bg-sky-500 text-slate-100">Cadastrar</button>
  </form>
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
