<script setup>
import { ref } from 'vue'
import MainCards from '@/components/MainCards.vue';
import MainPagination from '@/components/MainPagination.vue';
const title = ref('Hello There ✋')
</script>

<template>
<MainCards/>
<MainPagination></MainPagination>
</template>
