export default async function getPokemon(name: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_POKE_API_URL}/api/v2/pokemon/${name}`,
    );

    if (!res.ok) {
        throw new Error('Failed to fetch the pokemon data');
    }

    return await res.json();
}
