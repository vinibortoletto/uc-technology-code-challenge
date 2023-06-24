<script setup>
import { useRoute } from 'vue-router'
import * as api from '../utils/api.js'
import { watchEffect, ref } from 'vue'
import EmployeeForm from '../components/EmployeeForm.vue'
import PageTitle from '../components/PageTitle.vue'

const route = useRoute()
const employee = ref({})
const employeeId = route.params.id

watchEffect(async () => {
  employee.value = await api.getEmployeeById(employeeId)
})
</script>

<template>
  <PageTitle title="Editar Funcionário" />
  <EmployeeForm :isUpdating="true" :employee="employee" :employeeId="employeeId" />
</template>
