<script setup>
import { faker } from '@faker-js/faker'

// const firstname = faker.person.firstName()
// const lastname = faker.person.lastName()
// const fullname = faker.person.fullName({firstName: firstname, lastName: lastname})
// const job_title = faker.person.jobTitle()
// const bio = faker.lorem.lines(2)
// const username = faker.internet.userName({firstName: firstname, lastName: lastname}).toLowerCase()

const props = defineProps({
    employee: {
        type: Object,
        required: true,
        default: () => {
            return {
                _id: "660a0784edcae08c216db70a",
                userName: "cprom",
                firstName: "Chen",
                lastName: "Prom",
                title: "Software Developer",
                quote: "Easy times make weak men",
                __v: 0
            }
        },
    },
})
</script>

<template>
<!-- {{ fullname }} <br/> -->
<RouterLink :to="{name: 'CardDetails', params: {id: props.employee._id}}">
<div class="border border-gray-400 rounded-lg shawdow bg-gray-200 h-full">
    <img :src="faker.image.urlLoremFlickr({category: 'car'})" class="rounded-t-xl"/>
    <div class="p-4">
        <p class="mb-2 text-2xl font-bold">{{ props.employee.firstName }}, {{ props.employee.lastName }}</p>
        <p class="mb-3 font-normal text-gray-700">{{ props.employee.title}}</p>
        <p class="mb-3 font-normal text-gray-700">{{ props.employee.quote }}</p>
    </div>
</div>
</RouterLink>
</template>