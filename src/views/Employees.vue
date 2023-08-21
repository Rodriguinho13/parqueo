<template>
    <div>
        <h2>CRUD de Empleados</h2>
        <EmployeeForm :employeeTypes="types" :areas="areas" />
        <hr />
        <EmployeeList :employees="employees" :types="types" :areas="areas" />
    </div>
</template>

<script>
import axios from 'axios'; 
import EmployeeForm from '@/components/EmployeeForm.vue';
import EmployeeList from '@/components/EmployeeList.vue';

export default {
    components: {
        EmployeeForm,
        EmployeeList,
    },
    data() {
        return {
            employees: [], // Lista de empleados
            types: [], // Lista de tipos
            areas: [], // Lista de áreas
        };
    },
    async created() {
        try {
            const responseEmployees = await axios.get('http://localhost:3001/employees');
            this.employees = responseEmployees.data;

            const responseTypes = await axios.get('http://localhost:3001/types');
            this.types = responseTypes.data;

            const responseAreas = await axios.get('http://localhost:3001/areas');
            this.areas = responseAreas.data;
        } catch (error) {
            console.error(error);
        }
    },
};
</script>

