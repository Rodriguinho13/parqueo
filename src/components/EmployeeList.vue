<template>
    <div>
        <h3>Lista de Empleados</h3>
        <input v-model="searchName" placeholder="Buscar por nombre" />
        <select v-model="filterType" placeholder="Filtrar por tipo">
            <option value="">Todos</option>
            <option v-for="type in types" :key="type.id" :value="type.id">{{ type.name }}</option>
        </select>
        <ul>
            <li v-for="employee in filteredEmployees" :key="employee.id">
                {{ employee.name }} ({{ employee.color }} {{ employee.placa }})
                <button @click="deleteEmployee(employee.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchName: '',
            filterType: '',
            employees: [],
            types: [],
        };
    },
    async created() {
        try {
            const responseEmployees = await axios.get('http://localhost:3001/employees');
            this.employees = responseEmployees.data;

            const responseTypes = await axios.get('http://localhost:3001/types');
            this.types = responseTypes.data;
        } catch (error) {
            console.error(error);
        }
    },
    computed: {
        filteredEmployees() {
            return this.employees.filter(employee => {
                return (
                    employee.name.toLowerCase().includes(this.searchName.toLowerCase()) &&
                    (this.filterType === '' || employee.typesId === parseInt(this.filterType))
                );
            });
        },
    },
    methods: {
        async deleteEmployee(id) {
            try {
                await axios.delete(`http://localhost:3001/employees/${id}`);
                this.employees = this.employees.filter(employee => employee.id !== id);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

