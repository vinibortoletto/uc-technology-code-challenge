<script setup>
import { ref } from 'vue'
import * as api from '../utils/api.js'
import { useEmployee } from '../store'
import TextField from './TextField.vue'
import validateForm from '../utils/validateForm.js'
import LoadingAnimation from './LoadingAnimation.vue'

const defaultFormValues = {
  firstName: '',
  lastName: '',
  role: '',
  startDate: ''
}

const formValues = ref({ ...defaultFormValues })
const errorMessages = ref({ ...defaultFormValues })
const errorMessage = ref('')
const isLoading = ref(false)
const { employeeList } = useEmployee()

const resetForm = () => {
  formValues.value = { ...defaultFormValues }
  errorMessages.value = { ...defaultFormValues }
}

const handleSubmit = async () => {
  const { firstName, lastName, role, startDate } = formValues.value

  if (
    validateForm(firstName) ||
    validateForm(lastName) ||
    validateForm(role) ||
    validateForm(startDate)
  ) {
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
    isLoading.value = true
    await api.createNewEmployee(newEmployee)
    employeeList.value = await api.getEmployeeList()
    resetForm()
  } catch (error) {
    errorMessage.value = 'Aconteceu um erro no cadastro. Por favor, tente novamente.'

    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
  } finally {
    isLoading.value = false
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

    <button v-if="isLoading" type="submit" class="p-2 font-bold rounded bg-sky-500 text-slate-100">
      <LoadingAnimation />
    </button>

    <button v-else type="submit" class="p-2 font-bold rounded bg-sky-500 text-slate-100">
      Cadastrar
    </button>

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
