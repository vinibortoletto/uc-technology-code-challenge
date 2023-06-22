const CREATOR_ID = 'b6df48a8-9810-4998-a8e1-c4d3fa23aaa2'
const CREATOR_NAME = 'Vinicius Bortoletto'
const API_URL = 'http://187.60.56.72:3131/'

export const getEmployeeList = async () => {
  try {
    const response = await fetch(`${API_URL}funcionario?criadorId=${CREATOR_ID}`)
    const employeeList = await response.json()
    return employeeList
  } catch (error) {
    console.error(error)
  }
}
