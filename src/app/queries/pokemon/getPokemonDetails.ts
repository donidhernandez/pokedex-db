export default async function getPokemon(name: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
        throw new Error('Failed to fetch the pokemon data');
    }

    return await res.json();
}
