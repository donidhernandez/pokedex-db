'use client';

import { PokemonAPIResponse } from '@/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { toast } from 'sonner';
import MoveCard from '../MoveCard';
import Loader from '../../Loader';
import { getMoves } from '@/app/queries/moves/getMoves';

const MovesList = () => {
    const { data, error, fetchNextPage, status } = useInfiniteQuery({
        getNextPageParam: (lastPage: PokemonAPIResponse) => lastPage.next,
        queryFn: ({ pageParam }) => getMoves({ url: pageParam }),
        queryKey: ['moves'],
    });

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    if (status === 'loading') {
        return <Loader />;
    }

    if (error instanceof Error && status === 'error') {
        return toast.error(error.message);
    }

    return (
        <>
            <h1 className="md:text-8xl text-5xl font-bold mb-6">Moves</h1>
            <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row  gap-3 w-full">
                {data &&
                    data.pages.map(page => {
                        return page.results.map((item, index) => {
                            return (
                                <div key={item.name}>
                                    {index === page.results.length - 1 ? (
                                        <div ref={ref}>
                                            <MoveCard moveName={item.name} />
                                        </div>
                                    ) : (
                                        <MoveCard moveName={item.name} />
                                    )}
                                </div>
                            );
                        });
                    })}
            </section>
        </>
    );
};

export default MovesList;
