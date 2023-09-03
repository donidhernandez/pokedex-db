'use client';

import { useQuery } from '@tanstack/react-query';

import getPokemon from '@/app/queries/pokemon/getPokemonDetails';
import getPokemonSpecies from '@/app/queries/pokemon/getPokemonSpecies';
import { Pokemon, PokemonSpecie } from '@/types';
import Loader from '@/app/components/Loader';
import PokemonMainInfo from '@/app/components/PokemonDetails/PokemonMainInfo';
import PokemonImage from '@/app/components/PokemonDetails/PokemonImage';
import PokemonStats from '@/app/components/PokemonDetails/PokemonStats';
import PokemonMoves from '@/app/components/PokemonDetails/PokemonMoves';

const PokemonDetails = ({ params }: { params: { name: string } }) => {
    const { name } = params;

    const { data: pokemon, isLoading } = useQuery<Pokemon>({
        queryFn: () => getPokemon(name),
        queryKey: ['pokemon', name],
    });

    const { data: pokemonSpecies } = useQuery<PokemonSpecie>({
        queryFn: () => getPokemonSpecies(name),
        queryKey: ['pokemon_species', name],
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <section className="p-6 w-full pt-14">
            {pokemon && pokemonSpecies && (
                <section className="flex w-full">
                    <PokemonImage
                        image={pokemon.sprites.front_default}
                        name={pokemon.name}
                    />
                    <section className="flex-col flex">
                        <PokemonMainInfo
                            pokemon={pokemon}
                            pokemonSpecies={pokemonSpecies}
                        />
                        <PokemonStats stats={pokemon.stats} />
                        <PokemonMoves moves={pokemon.moves} />
                    </section>
                </section>
            )}
        </section>
    );
};

export default PokemonDetails;
