export default defineEventHandler(async event => {
    // Handle query params
    // const { name } = getQuery(event);

    // // Handle POST data
    // const { age } = await readBody(event);

    // API call with private key
    const { data }: any = await $fetch('https://api.bishestamedia.com.np/api/biraj');

    return data;
});
