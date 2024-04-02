<script setup>
import MainCardSingle from './MainCardSingle.vue';
import useApi from '@/composables/useApi';

const { employees } = useApi()

</script>

<template>
    <div class="grid grid-cols-5 gap-10 p-10">
        <MainCardSingle v-for="employee in employees" :key="employee._id" :employee="employee"></MainCardSingle>
    </div>
</template>