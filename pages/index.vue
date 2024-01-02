<template>
    <div class="center-container">
        <div class="box">
            <p>Name: Biraj Rai</p>
            <p>Nick: Neppixel</p>
            <p>Gender: Male</p>
            <p>DOB: 2006, Oct 31</p>
            <p>From: Nepal</p>
            <p>Likes: Music</p>
            <p>Dislikes: CRINGE</p>
            <p>Study: Studying as Student.</p>
            <p>Marital status: Unmarried</p>
        </div>
    </div>
    <div class="last-update">
        <p>Last Update: {{ lastUpdate }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const lastUpdate = ref('');

onMounted(async () => {
    try {
        const response = await fetch('https://api.github.com/repos/love-to-eat/itsbiraj.com.np/commits');
        const data = await response.json();
        const commitDate = data[0]?.commit?.author?.date;
        lastUpdate.value = commitDate ? new Date(commitDate).toLocaleString() : 'N/A';
    } catch (error) {
        console.error('Error fetching data:', error);
        lastUpdate.value = 'N/A';
    }
});
</script>

<style scoped>
.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.box {
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 800px;
    padding: 20px;
}

p {
    margin: 0;
    text-align: center;
    padding: 5px;
}
</style>
