<script setup>
import { ref } from 'vue'
import * as api from '../utils/api.js'
import { useEmployee } from '../store'
import TextField from './TextField.vue'
import validateForm from '../utils/validateForm.js'

const formValues = ref({
  firstName: '',
  lastName: '',
  role: '',
  startDate: ''
})

const errorMessages = ref({
  firstName: '',
  lastName: '',
  role: '',
  startDate: ''
})

const errorMessage = ref('')
const { employeeList } = useEmployee()

const handleSubmit = async () => {
  const { firstName, lastName, role, startDate } = formValues.value

  if (validateForm(firstName) || validateForm(lastName) || validateForm(role)) {
    errorMessages.value.firstName = validateForm(firstName)
    errorMessages.value.lastName = validateForm(lastName)
    errorMessages.value.role = validateForm(role)
    errorMessages.value.startDate = validateForm(startDate)

    return
  }

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
  errorMessages.value[id] = validateForm(value)
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
      :errorMessage="errorMessages.firstName"
    />

    <TextField
      v-on:handleInputChange="handleInputChange"
      id="lastName"
      label="Sobrenome"
      type="text"
      :value="formValues.lastName"
      :errorMessage="errorMessages.lastName"
    />

    <TextField
      v-on:handleInputChange="handleInputChange"
      id="role"
      label="Cargo"
      type="text"
      :value="formValues.role"
      :errorMessage="errorMessages.role"
    />

    <TextField
      v-on:handleInputChange="handleInputChange"
      id="startDate"
      label="Data de início"
      type="date"
      :value="formValues.startDate"
      :errorMessage="errorMessages.startDate"
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
