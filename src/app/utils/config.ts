export const { POKEMON_API_URL } = process.env;
export const SERVER_URL =
    process.env.NODE_ENV === 'production' ? '' : process.env.SERVER_DEV_URL;
