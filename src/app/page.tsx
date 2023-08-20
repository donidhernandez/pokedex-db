import { PokemonList } from '@/components/PokemonList';
import { POKEMON_API_URL } from '@/utils/config';

async function getPokemons() {
    const res = await fetch(`${POKEMON_API_URL}/pokemon`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Home() {
    const pokemons = await getPokemons();
    return (
        <main className="flex min-h-screen flex-col p-10">
            <PokemonList pokemons={pokemons.results} />
        </main>
    );
}
