'use client';

import { useInView } from 'react-intersection-observer';

import { PokemonAPIResponse } from '@/types';
import PokemonCard from '../PokemonCard';
import { useEffect } from 'react';
import { getPokemons } from '@/app/queries/pokemon/getPokemons';
import { toast } from 'sonner';
import { useInfiniteQuery } from '@tanstack/react-query';
import Loader from '../Loader';

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
        return <Loader />;
    }

    if (error instanceof Error && status === 'error') {
        return toast.error(error.message);
    }

    return (
        <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row  gap-3 w-full">
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
