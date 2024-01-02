<template>
    <div class="center">
        <p>"Not coming soon, but will be added soon!"</p>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/USD');
</script>

<style scoped>
.center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}
</style>
