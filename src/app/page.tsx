async function getPokemons() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Home() {
    const pokemons = await getPokemons();

    console.log(pokemons);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    );
}
