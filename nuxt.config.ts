// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Biraj Rai',
            meta: [
                { name: 'creator', content: 'Biraj Rai' },
                { name: 'description', content: 'A simple guy from Nepal.' },
                { name: 'keywords', content: ['Biraj Rai', 'birajrai'] },
                { name: 'theme-color', content: '#B48EAD' },
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: 'https://raw.githubusercontent.com/love-to-eat/itsbiraj.com.np/main/assets/img/favicon.png',
                },
            ],
        },
    },
    runtimeConfig: {
        apiKey: process.env.myApiKey,
    },
});
