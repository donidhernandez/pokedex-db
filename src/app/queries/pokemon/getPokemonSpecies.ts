export default async function getPokemonSpecies(name: string) {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`,
    );

    if (!res.ok) {
        throw new Error('Failed to fetch the pokemon species data');
    }

    return await res.json();
}