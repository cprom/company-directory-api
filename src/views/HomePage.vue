<script setup>
import { onMounted } from 'vue'
import MainCards from '@/components/MainCards.vue';
import MainPagination from '@/components/MainPagination.vue';
// const title = ref('Hello There ✋')
import useApi from '@/composables/useApi';

const { getEmployees, loading } = useApi()

onMounted(async () => {
    await getEmployees()
})

</script>

<template>

    <p v-if="loading">LOADING...</p>
    <div v-else>
    <MainCards/>
    <MainPagination></MainPagination>
    </div>
</template>
