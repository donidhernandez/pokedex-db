'use client';

import { useInView } from 'react-intersection-observer';

import { Info, PokemonAPIResponse } from '@/types';
import PokemonCard from '../PokemonCard';
import { useEffect, useState } from 'react';
import { getPokemons } from '@/app/queries/pokemon/getPokemons';

interface IPokemonList {
    pokemons: PokemonAPIResponse;
}

export default function PokemonList({ pokemons }: IPokemonList) {
    const [pokemonList, setPokemonList] = useState<Info[]>(pokemons.results);
    const [nextPage, setNextPage] = useState(pokemons.next);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const loadMorePokemon = async () => {
        if (nextPage) {
            const res = await getPokemons({ url: nextPage });
            setPokemonList([...pokemonList, ...res.results]);
            setNextPage(res.next);
        }
    };

    useEffect(() => {
        if (inView) {
            loadMorePokemon();
        }
    }, [inView]);

    return (
        <>
            {' '}
            <section className="h-min-screen flex flex-wrap gap-3 w-full">
                {pokemonList.map((pokemon: Info, index: number) => {
                    return (
                        <div key={pokemon.name}>
                            {index === pokemonList.length - 1 ? (
                                <div ref={ref}>
                                    <PokemonCard pokemonName={pokemon.name} />
                                </div>
                            ) : (
                                <PokemonCard pokemonName={pokemon.name} />
                            )}
                        </div>
                    );
                })}
            </section>
        </>
    );
}
