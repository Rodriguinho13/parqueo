<template>
    <div v-if="show">
        <div class="modal-overlay">
            <div class="modal-container">
                <h3>Editar Área</h3>
                <form @submit.prevent="saveEdit">
                    <label for="editedAreaName">Nombre del Área:</label>
                    <input type="text" id="editedAreaName" v-model="editedArea.name" required />
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
        area: Object,
    },
    data() {
        return {
            editedArea: null,
        };
    },
    watch: {
        area: {
            immediate: true,
            handler(newVal) {
                this.editedArea = { ...newVal };
            },
        },
    },
    methods: {
        saveEdit() {
            this.$emit('save', this.editedArea);
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
