import PokemonList from '@/app/components/PokemonList';
// import { getPokemons } from './queries/pokemon/getPokemons';

export default async function Home() {
    // const pokemons = await getPokemons({});

    return (
        <main className="flex min-h-screen flex-col p-10">
            <PokemonList />
        </main>
    );
}
