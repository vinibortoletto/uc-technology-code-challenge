<script setup>
import { ref } from 'vue'
import * as api from '../utils/api.js'
import { useEmployee } from '../store'
import TextField from './TextField.vue'
import validateForm from '../utils/validateForm.js'
import LoadingAnimation from './LoadingAnimation.vue'
import { watchEffect, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import capitalizeText from '../utils/capitalizeText.js'

const router = useRouter()

const props = defineProps({
  isUpdating: Boolean,
  employeeId: String,
  employee: Object
})

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
    cargo: role.toUpperCase(),
    dataInicio: new Date(startDate).toISOString()
  }

  try {
    isLoading.value = true

    if (props.isUpdating) {
      await api.updateEmployee(props.employeeId, newEmployee)
      router.push('/')
    } else {
      await api.createNewEmployee(newEmployee)
    }

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

watchEffect(() => {
  if (props.employee && props.employee.nome) {
    const { nome, sobrenome, cargo, dataInicio } = props.employee

    formValues.value = {
      firstName: nome,
      lastName: sobrenome,
      role: capitalizeText(cargo),
      startDate: new Date(dataInicio).toISOString().split('T')[0]
    }
  }
})
</script>

<template>
  <form class="flex flex-col max-w-xl gap-4 mx-auto" @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-4 sm:flex-row">
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
    </div>

    <div class="flex flex-col gap-4 sm:flex-row">
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
    </div>

    <p v-if="errorMessage" class="text-sm text-right text-red-800">{{ errorMessage }}</p>

    <div class="flex flex-col justify-center gap-2 sm:flex-row">
      <button
        v-if="isUpdating"
        @click="$router.push('/')"
        type="button"
        class="w-full p-2 rounded sm:w-40 bg-slate-300 text-slate-800"
      >
        Cancelar
      </button>

      <button
        v-if="isLoading"
        type="submit"
        class="w-full p-2 font-bold rounded sm:w-40 bg-sky-500 text-slate-100"
      >
        <LoadingAnimation />
      </button>

      <button
        v-else
        type="submit"
        class="w-full p-2 font-bold rounded sm:w-40 bg-sky-500 text-slate-100"
      >
        {{ isUpdating ? 'Salvar' : 'Cadastrar' }}
      </button>
    </div>
  </form>
</template>
