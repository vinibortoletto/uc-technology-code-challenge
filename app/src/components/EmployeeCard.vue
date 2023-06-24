<script setup>
import { Icon } from '@iconify/vue'
import * as api from '../utils/api.js'
import DeleteEmployeePopUp from '../components/DeleteEmployeePopUp.vue'
import { ref } from 'vue'
import { useEmployee } from '../store'
import { RouterLink } from 'vue-router'
import capitalizeText from '../utils/capitalizeText.js'

const isDeleting = ref(false)
const { employeeList } = useEmployee()

defineProps({
  employee: {
    id: Number,
    nome: String,
    sobrenome: String,
    cargo: String
  }
})

const togglePopUp = () => {
  isDeleting.value = !isDeleting.value
}

const deleteEmployee = async (_, id) => {
  try {
    await api.deleteEmployee(id)
    employeeList.value = await api.getEmployeeList()
  } catch (error) {
    console.log(error)
  } finally {
    togglePopUp()
  }
}
</script>

<template>
  <div class="relative">
    <button
      @click="togglePopUp"
      class="absolute p-1 text-xs text-white bg-red-700 rounded-full right-2 top-2"
    >
      <Icon icon="ep:close-bold" />
    </button>

    <RouterLink :to="`/edit-employee/${employee.id}`">
      <div class="flex items-center gap-4 p-6 text-base transition bg-white shadow hover:shadow-md">
        <div class="p-1 border-4 rounded-full border-sky-500 full">
          <Icon icon="solar:user-bold" class="text-4xl text-sky-500" />
        </div>

        <div>
          <p class="text-lg font-bold">{{ employee.nome }} {{ employee.sobrenome }}</p>
          <p>{{ capitalizeText(employee.cargo) }}</p>
        </div>
      </div>
    </RouterLink>
  </div>

  <DeleteEmployeePopUp
    v-if="isDeleting"
    v-on:togglePopUp="togglePopUp"
    v-on:deleteEmployee="deleteEmployee"
    :employee="employee"
  />
</template>
