<script setup>
import { onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import EmployeeForm from './components/EmployeeForm.vue'
import { useEmployee } from './store.js'
import * as api from './utils/api.js'

const { employeeList } = useEmployee()

onMounted(async () => {
  employeeList.value = await api.getEmployeeList()
})
</script>

<template>
  <AppHeader />

  <main class="px-4">
    <EmployeeForm />

    <div v-for="employee in employeeList" :key="employee.id">
      <p>{{ employee.nome }} {{ employee.sobrenome }}</p>
      <p>{{ employee.cargo }}</p>
    </div>
  </main>
</template>
