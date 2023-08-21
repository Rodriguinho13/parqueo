<template>
    <div>
        <h3>Editar Tipo</h3>
        <TypeForm :typeId="typeId" />
    </div>
</template>

<script>
import TypeForm from '@/components/TypeForm.vue';

export default {
    components: {
        TypeForm,
    },
    computed: {
        typeId() {
            return this.$route.params.id;
        },
    },
};
</script>
