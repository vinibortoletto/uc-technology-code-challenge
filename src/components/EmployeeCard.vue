<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { DeleteEmployeePopUp } from '../components'
import { useEmployee } from '../store'
import { capitalizeText } from '../utils'
import * as api from '../utils/api.js'

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
    <!-- Delete Button -->
    <button
      @click="togglePopUp"
      class="absolute p-1 text-xs text-white bg-red-700 rounded-full right-2 top-2"
    >
      <Icon icon="ep:close-bold" />
    </button>

    <!-- Card -->
    <RouterLink :to="`/edit-employee/${employee.id}`">
      <div
        class="flex items-center h-32 gap-4 p-6 text-base transition bg-white rounded-lg shadow hover:shadow-md"
      >
        <!-- User Icon -->
        <div class="p-1 border-4 rounded-full border-sky-500 full">
          <Icon icon="solar:user-bold" class="text-4xl text-sky-500" />
        </div>

        <!-- Card Content -->
        <div>
          <p class="text-lg font-bold">{{ employee.nome }} {{ employee.sobrenome }}</p>
          <p>{{ capitalizeText(employee.cargo) }}</p>
        </div>
      </div>
    </RouterLink>
  </div>

  <!-- Hidden Popup -->
  <Transition name="popup">
    <DeleteEmployeePopUp
      v-if="isDeleting"
      v-on:togglePopUp="togglePopUp"
      v-on:deleteEmployee="deleteEmployee"
      :employee="employee"
    />
  </Transition>
</template>

<style scoped>
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-to,
.popup-leave-from {
  opacity: 1;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.2s ease;
}
</style>
