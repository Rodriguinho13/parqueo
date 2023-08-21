<template>
    <div>
        <h3>Lista de Tipos</h3>
        <ul>
            <li v-for="type in types" :key="type.id">
                {{ type.name }}
                <button @click="deleteType(type.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            types: [],
        };
    },
    async created() {
        await this.fetchTypes();
    },
    methods: {
        async fetchTypes() {
            try {
                const response = await axios.get('http://localhost:3001/types');
                this.types = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async deleteType(typeId) {
            try {
                await axios.delete(`http://localhost:3001/types/${typeId}`);
                console.log('Tipo eliminado:', typeId);
                await this.fetchTypes(); // Actualizar la lista después de eliminar
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
