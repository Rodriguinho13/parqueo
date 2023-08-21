<template>
    <div>
        <h3>Lista de Áreas</h3>
        <ul>
            <li v-for="area in areas" :key="area.id">
                {{ area.name }}
                <button @click="deleteArea(area.id)">Eliminar</button>
            </li>
        </ul>
        <AreaEditDialog
            :show="showEditDialog"
            :area="selectedArea"
            @close="closeEditDialog"
            @save="saveEditedArea"
            />
    </div>
</template>

<script>
import axios from 'axios';
import AreaEditDialog from '@/components/AreaEditDialog.vue'; // Importa el componente

export default {
    props: ['areas'], // Propiedad para recibir la lista de áreas desde el componente padre

    components: {
        AreaEditDialog, // Agrega el componente como parte de la vista
    },
    
    data() {
        return {
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
        async deleteArea(id) {
            try {
                await axios.delete(`http://localhost:3001/areas/${id}`);
                this.areas = this.areas.filter(area => area.id !== id);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
