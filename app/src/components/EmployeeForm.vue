<script setup>
import { ref } from 'vue'
import * as api from '../utils/api.js'
import { useEmployee } from '../store'
import TextField from './TextField.vue'

const formValues = ref({
  firstName: '',
  lastName: '',
  role: '',
  startDate: ''
})

const errorMessage = ref('')

const { employeeList } = useEmployee()

const handleSubmit = async () => {
  const { firstName, lastName, role, startDate } = formValues.value

  const newEmployee = {
    nome: firstName,
    sobrenome: lastName,
    cargo: role,
    dataInicio: new Date(startDate).toISOString()
  }

  try {
    await api.createNewEmployee(newEmployee)
    employeeList.value = await api.getEmployeeList()
  } catch (error) {
    errorMessage.value = 'Aconteceu um erro no cadastro. Por favor, tente novamente.'

    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
  }
}

const handleInputChange = (event) => {
  const { id, value } = event.target
  formValues.value[id] = value
}
</script>

<template>
  <h1 class="mb-4 text-3xl font-bold text-center text-sky-700">Cadastrar funcionário</h1>

  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <TextField
      v-on:handleInputChange="handleInputChange"
      id="firstName"
      label="Nome"
      type="text"
      :value="formValues.firstName"
    />

    <TextField
      v-on:handleInputChange="handleInputChange"
      id="lastName"
      label="Sobrenome"
      type="text"
      :value="formValues.lastName"
    />

    <TextField
      v-on:handleInputChange="handleInputChange"
      id="role"
      label="Cargo"
      type="text"
      :value="formValues.role"
    />

    <TextField
      v-on:handleInputChange="handleInputChange"
      id="startDate"
      label="Data de início"
      type="date"
      :value="formValues.startDate"
    />

    <button type="submit" class="p-2 font-bold rounded bg-sky-500 text-slate-100">Cadastrar</button>
    <p v-if="errorMessage" class="text-sm text-red-800">{{ errorMessage }}</p>
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
