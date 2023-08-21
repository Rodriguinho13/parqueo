<template>
    <div>
        <h2>CRUD de Tipos</h2>
        <TypeForm />
        <TypeList />
    </div>
</template>

<script>
import TypeForm from '../components/TypeForm.vue';
import TypeList from '../components/TypeList.vue';

export default {
    components: {
        TypeForm,
        TypeList,
    },
};
</script>
