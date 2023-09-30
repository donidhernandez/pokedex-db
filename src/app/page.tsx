import PokemonList from '@/app/components/Pokemons/PokemonList';

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col p-10">
            <PokemonList />
        </main>
    );
}
