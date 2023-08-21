<template>
    <div>
        <h2>CRUD de Áreas</h2>
        <AreaForm />
        <hr />
        <AreaList />
    </div>
</template>

<script>
import AreaForm from '@/components/AreaForm.vue';
import AreaList from '@/components/AreaList.vue';

export default {
    components: {
        AreaForm,
        AreaList,
    },
};
</script>
