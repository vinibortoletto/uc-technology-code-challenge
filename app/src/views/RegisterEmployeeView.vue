<script setup>
import { onMounted } from 'vue'
import EmployeeForm from '../components/EmployeeForm.vue'
import { useEmployee } from '../store.js'
import * as api from '../utils/api.js'
import EmployeeCard from '../components/EmployeeCard.vue'

const { employeeList } = useEmployee()

onMounted(async () => {
  employeeList.value = await api.getEmployeeList()
})
</script>

<template>
  <EmployeeForm />

  <div class="mt-4">
    <EmployeeCard v-for="employee in employeeList" :key="employee.id" :employee="employee" />
  </div>
</template>
