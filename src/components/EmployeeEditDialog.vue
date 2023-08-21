<template>
    <div v-if="show">
        <div class="modal-overlay">
            <div class="modal-container">
                <h3>Editar Empleado</h3>
                <form @submit.prevent="saveEdit">
                    <label for="editedEmployeeName">Nombre del Empleado:</label>
                    <input type="text" id="editedEmployeeName" v-model="editedEmployee.name" required />
                    <!-- Agrega los demás campos para la edición -->
                    <button type="submit">Guardar Cambios</button>
                    <button @click="close">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
        employee: Object,
        
        types: Array,
        areas: Array,
    },
    data() {
        return {
            editedEmployee: null,
        };
    },
    watch: {
        employee: {
            immediate: true,
            handler(newVal) {
                this.editedEmployee = { ...newVal };
            },
        },
    },
    methods: {
        saveEdit() {
            this.$emit('save', this.editedEmployee);
        },
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
/* Estilos para el diálogo */
</style>
