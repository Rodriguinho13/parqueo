<template>
    <div>
        <h3>{{ formTitle }}</h3>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label>Nombre del Tipo:</label>
                <input v-model="typeName" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">{{ submitButtonText }}</button>
            <button v-if="typeId" @click="deleteType" class="btn btn-danger">Eliminar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['typeId'], // Pasa el ID del tipo si estás editando
    data() {
        return {
            typeName: '',
            formTitle: '',
            submitButtonText: '',
        };
    },
    async created() {
        if (this.typeId) {
            await this.fetchTypeDetails(this.typeId);
            this.formTitle = 'Editar Tipo';
            this.submitButtonText = 'Actualizar';
        } else {
            this.formTitle = 'Agregar Tipo';
            this.submitButtonText = 'Guardar';
        }
    },
    methods: {
        async fetchTypeDetails(typeId) {
            try {
                const response = await axios.get(`http://localhost:3001/types/${typeId}`);
                this.typeName = response.data.name;
            } catch (error) {
                console.error(error);
            }
        },
        async submitForm() {
            if (this.typeId) {
                await this.updateType();
            } else {
                await this.addType();
            }
        },
        async addType() {
            try {
                const response = await axios.post('http://localhost:3001/types', {
                    name: this.typeName
                });
                console.log('Tipo agregado:', response.data);

                this.typeName = ''; // Limpiar el campo después de guardar
            } catch (error) {
                console.error(error);
            }
        },
        async updateType() {
            try {
                await axios.put(`http://localhost:3001/types/${this.typeId}`, {
                    name: this.typeName
                });
                console.log('Tipo actualizado:', this.typeId);
            } catch (error) {
                console.error(error);
            }
        },
        async deleteType() {
            try {
                await axios.delete(`http://localhost:3001/types/${this.typeId}`);
                console.log('Tipo eliminado:', this.typeId);
                this.$router.push('/types'); // Redireccionar después de eliminar
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
