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
    <div class="inspiration">
        <p>
            Inspired by
            <a
                class="hover animation"
                href="https://spooky-profile.w3spaces.com/"
                target="_blank"
                rel="noopener noreferrer"
                >Numa</a
            >
        </p>
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
    height: 64vh;
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
    padding: 0;
}
.hover:hover {
    color: #49108b;
    font-weight: bold;
}
.animation {
    background: url('img/animated.gif') repeat scroll 0 0%;
    color: #ff0000;
    font-weight: bold;
    text-shadow: 0 0 5px #fff, 0 0 5px #f00, 1px 1px 0 #f00;
}
.animation:hover {
    background: url('img/animated.gif') repeat scroll 0 0%;
    color: #49108b;
    font-weight: bold;
    text-shadow: 0 0 5px #fff, 0 0 5px #49108b, 1px 1px 0 #49108b;
}
</style>
