export const getPokemons = async ({
    url = null,
    offset = 0,
    limit = 20,
}: {
    url?: string | null;
    offset?: number;
    limit?: number;
}) => {
    const urlToFetch =
        url ??
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const res = await fetch(`${urlToFetch}`);
    if (!res.ok) {
        throw new Error('Could not fetch pokemons');
    }

    return res.json();
};
