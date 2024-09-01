<template>
    <p>Events</p>

    <div>
        Counter: {{counter}} 
        <button @click="counter++">+</button >
        <button @click="counter--">-</button> 

    </div>
</template>

<script setup lang="ts">

definePageMeta({
    middleware: "auth"
})


const counter = useCounter()

</script>
