<script setup>
import { onMounted } from 'vue'
import EmployeeForm from '../components/EmployeeForm.vue'
import { useEmployee } from '../store.js'
import * as api from '../utils/api.js'

const { employeeList } = useEmployee()

const capitalizeText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

onMounted(async () => {
  employeeList.value = await api.getEmployeeList()
})
</script>

<template>
  <EmployeeForm />

  <div v-for="employee in employeeList" :key="employee.id">
    <p>{{ employee.nome }} {{ employee.sobrenome }}</p>
    <p>{{ capitalizeText(employee.cargo) }}</p>
  </div>
</template>
