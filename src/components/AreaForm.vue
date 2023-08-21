<template>
    <div>
        <h3>Agregar Área</h3>
        <form @submit.prevent="submitForm">
            <!-- Campos del formulario -->
            <label for="areaName">Nombre del Área:</label>
            <input type="text" id="areaName" v-model="area.name" required />
            <button type="submit">Agregar Área</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            area: {
                name: '',
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                if (this.area.name) {
                    const response = await axios.post('http://localhost:3001/areas', this.area);
                    console.log('Área agregada:', response.data);

                    // Limpiar el formulario después de guardar
                    this.area.name = '';

                    // Emitir evento para actualizar la lista de áreas en el componente padre
                    this.$emit('areaAdded', response.data);
                }
            } catch (error) {
                console.error('Error al agregar el área:', error);
            }
        },
    },
};
</script>

