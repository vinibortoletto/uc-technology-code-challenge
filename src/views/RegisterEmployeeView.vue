<script setup>
import { onMounted } from 'vue'
import { EmployeeCard, EmployeeForm, PageTitle } from '../components'
import { useEmployee } from '../store.js'
import * as api from '../utils/api.js'

const { employeeList } = useEmployee()

onMounted(async () => {
  employeeList.value = await api.getEmployeeList()
})
</script>

<template>
  <PageTitle title="Cadastrar Funcionário" />

  <EmployeeForm />

  <section class="max-w-4xl mx-auto">
    <div class="w-full h-1 my-10 bg-slate-300" />

    <div v-if="employeeList.length > 0" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <EmployeeCard v-for="employee in employeeList" :key="employee.id" :employee="employee" />
    </div>

    <div v-else>
      <h3 class="text-xl text-center text-slate-500">Nenhum funcionário cadastrado</h3>
    </div>
  </section>
</template>
