import { ref } from 'vue'

const employeeList = ref([])

export function useEmployee() {
  return {
    employeeList
  }
}
