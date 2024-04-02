import axios from 'axios'
import { ref } from 'vue'

const instance = axios.create({
    baseURL: 'https://node-app-1cz6.onrender.com/',
})

const employees = ref([])
const loading = ref(false)
const currentEmployee = ref(null)

export default function useApi() {
    const getEmployees = async () => {
        loading.value = true
        if (employees.value.length === 0) {
            const response = await instance.get('api/employees/fetch')
            employees.value = response.data
        }
        loading.value = false
    }

    const fetchEmployee = async (id) => {
        const response = await instance.get(`api/employees/fetch/${id}`)
        currentEmployee.value = response.data
    }

    return {instance, employees, getEmployees, loading, fetchEmployee, currentEmployee}
}