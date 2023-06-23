import axios from 'axios'

const CREATOR_ID = 'b6df48a8-9810-4998-a8e1-c4d3fa23aaa2'
const CREATOR_NAME = 'Vinicius Bortoletto'
const API_URL = 'http://187.60.56.72:3131/funcionario'

export const getEmployeeList = async () => {
  try {
    const response = await axios.get(`${API_URL}?criadorId=${CREATOR_ID}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createNewEmployee = async (newEmployee) => {
  try {
    await axios.post(
      `${API_URL}`,
      {
        ...newEmployee,
        criador: { id: CREATOR_ID, nome: CREATOR_NAME }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`)
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
