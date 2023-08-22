'use client';

import { useInView } from 'react-intersection-observer';

import { PokemonAPIResponse } from '@/types';
import PokemonCard from '../PokemonCard';
import { useEffect } from 'react';
import { getPokemons } from '@/app/queries/pokemon/getPokemons';
import { CircleLoader } from 'react-spinners';
import { toast } from 'sonner';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function PokemonList() {
    const { data, error, fetchNextPage, status } = useInfiniteQuery({
        getNextPageParam: (lastPage: PokemonAPIResponse) => lastPage.next,
        queryFn: ({ pageParam }) => getPokemons({ url: pageParam }),
        queryKey: ['pokemons'],
    });

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView]);

    if (status === 'loading') {
        return (
            <section className="flex h-screen justify-center items-center w-full">
                <CircleLoader color="#dc2626" />
            </section>
        );
    }

    if (error instanceof Error && status === 'error') {
        return toast.error(error.message);
    }

    return (
        <section className="h-min-screen flex flex-wrap gap-3 w-full">
            {data &&
                data.pages.map(page => {
                    return page.results.map((pokemon, index) => {
                        return (
                            <div key={pokemon.name}>
                                {index === page.results.length - 1 ? (
                                    <div ref={ref}>
                                        <PokemonCard
                                            pokemonName={pokemon.name}
                                        />
                                    </div>
                                ) : (
                                    <PokemonCard pokemonName={pokemon.name} />
                                )}
                            </div>
                        );
                    });
                })}
        </section>
    );
}
