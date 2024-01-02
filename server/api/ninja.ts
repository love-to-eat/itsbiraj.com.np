export default defineEventHandler(async event => {
    // Handle query params
    // const { name } = getQuery(event);

    // // Handle POST data
    // const { age } = await readBody(event);

    // API call with private key
    const { data }: any = await $fetch(
        'https://api.currencyapi.com/v3/latest?apikey=3YgodR7lkK1duOSOfkolQrqRKzObqbLmviLIwHys'
    );

    return data;
});
