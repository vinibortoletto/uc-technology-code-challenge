<script setup>
import { Icon } from '@iconify/vue'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { EmployeeForm, PageTitle } from '../components'
import { capitalizeText, formatDate } from '../utils'
import * as api from '../utils/api.js'

const route = useRoute()
const employee = ref({})
const employeeId = route.params.id
const formattedStartDate = ref('')
const formattedRole = ref('')

watchEffect(async () => {
  employee.value = await api.getEmployeeById(employeeId)
  formattedStartDate.value = formatDate(employee.value.dataInicio)
  formattedRole.value = capitalizeText(employee.value.cargo)
})
</script>

<template>
  <main class="flex-grow w-full px-4 mx-auto">
    <div class="flex flex-col items-center max-w-4xl mx-auto gap-14 lg:flex-row">
      <div
        class="flex flex-col items-center justify-center gap-6 px-4 py-10 mx-auto bg-white rounded-lg shadow w-80"
      >
        <div
          class="flex items-center justify-center w-20 h-20 mx-auto border-4 rounded-full border-sky-500"
        >
          <Icon icon="solar:user-bold" class="text-6xl text-sky-500" />
        </div>

        <div class="text-center">
          <p class="text-lg">
            <span>Funcionário(a): </span>
            <span class="font-bold">{{ employee.nome }} {{ employee.sobrenome }}</span>
          </p>
          <p class="text-lg">
            <span>Cargo: </span>
            <span class="font-bold">{{ formattedRole }}</span>
          </p>
          <p class="text-lg">
            <span>Data de início: </span>
            <span class="font-bold">{{ formattedStartDate }}</span>
          </p>
          <p class="text-lg">
            <span>Status: </span>
            <span class="font-bold">{{ employee.ativo ? 'Ativo' : 'Desativado' }}</span>
          </p>
        </div>
      </div>

      <div class="w-full md:w-auto">
        <PageTitle title="Editar Funcionário" />
        <EmployeeForm :isUpdating="true" :employee="employee" :employeeId="employeeId" />
      </div>
    </div>
  </main>
</template>
