<template>
    <div>
        <!-- Modal backdrop -->
        <div v-if="showModal" class="fixed inset-0 bg-black opacity-50"></div>

        <!-- Modal content -->
        <div v-if="showModal" class="fixed top-0 left-0 flex items-center justify-center w-full h-full">
            <div class="bg-white p-4 rounded-lg shadow-md overflow-hidden max-w-screen-lg">
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 md:mr-4 mb-4 md:mb-0">
                        <img :src="selectedImage.image_link" :alt="selectedImage.name" class="w-full h-auto" />
                    </div>
                    <div class="md:w-1/2">
                        <p class="text-lg font-semibold mb-2">{{ selectedImage.name }}</p>
                        <p class="text-sm text-gray-600 mb-2">{{ selectedImage.location }}</p>
                        <p class="text-sm text-gray-600 mb-2">Captured with: {{ selectedImage.captured_with }}</p>
                        <p class="text-sm text-gray-600 mb-2">Photographer: {{ selectedImage.photographer_name }}</p>
                        <button @click="closeModal" class="bg-gray-700 text-white px-4 py-2 rounded-md">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Grid of images -->
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <div v-for="image in images" :key="image.id" class="bg-gray-100 p-4 rounded-lg">
                    <img
                        :src="image.image_link"
                        :alt="image.name"
                        class="w-full h-48 object-cover mb-2 rounded-md cursor-pointer"
                        @click="openModal(image)"
                    />
                    <p class="text-lg font-semibold">{{ image.name }}</p>
                    <p class="text-sm text-gray-600">Location: {{ image.location }}</p>
                    <p class="text-sm text-gray-600">Captured with: {{ image.captured_with }}</p>
                    <p class="text-sm text-gray-600">Photographer: {{ image.photographer_name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [],
            showModal: false,
            selectedImage: null,
        };
    },
    async mounted() {
        try {
            const response = await fetch('http://127.0.0.1:5500/data.json');
            if (response.ok) {
                const jsonData = await response.json();
                this.images = jsonData;
            } else {
                console.error('Failed to fetch images:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    },
    methods: {
        openModal(image) {
            this.selectedImage = image;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.selectedImage = null;
        },
    },
};
</script>
