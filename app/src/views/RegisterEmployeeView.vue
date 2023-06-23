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
  <h1 class="mb-4 text-3xl font-bold text-center text-sky-700">Cadastrar funcionário</h1>

  <EmployeeForm />

  <div class="w-full h-1 my-10 bg-slate-300" />

  <section>
    <h2 class="mb-4 text-2xl font-bold text-center text-sky-700">Funcionários</h2>

    <div class="grid gap-4 md:grid-cols-2">
      <EmployeeCard v-for="employee in employeeList" :key="employee.id" :employee="employee" />
    </div>
  </section>
</template>
