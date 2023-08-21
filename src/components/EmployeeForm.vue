<template>
    <div>
        <h3>Agregar Empleado</h3>
        <form @submit.prevent="submitForm">
            <!-- Campos del formulario -->
            <div class="form-group">
                <label>Nombre:</label>
                <input v-model="employee.name" class="form-control" />
            </div>
            <div class="form-group">
                <label>Área:</label>
                <select v-model="employee.areasId" class="form-control">
                    <option v-for="area in areas" :key="area.id" :value="area.id">{{ area.name }}</option>
                </select>
            </div>
            <div class="form-group">
                    <label>Tipo:</label>
                    <select v-model="employee.typesId" class="form-control">
                        <option v-for="type in employeeTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
                    </select>
                </div>
            <div class="form-group">
                <label>Color del Vehículo:</label>
                <input v-model="employee.color" class="form-control" />
            </div>
            <div class="form-group">
                <label>Número de Placa:</label>
                <input v-model="employee.placa" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['employeeTypes', 'areas'],
    data() {
        return {
            employee: {
                name: '',
                areasId: null,
                typesId: null,
                color: '',
                placa: '',
            },
            areas: [],
        };
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:3001/areas');
            this.areas = response.data;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('http://localhost:3001/employees', this.employee);
                console.log('Empleado agregado:', response.data);

                // Limpiar el formulario después de guardar
                this.employee = {
                    name: '',
                    areasId: null,
                    typesId: null,
                    color: '',
                    placa: '',
                };
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
