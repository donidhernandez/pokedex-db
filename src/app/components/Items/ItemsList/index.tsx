'use client';

import { getItems } from '@/app/queries/items/getItems';
import { PokemonAPIResponse } from '@/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Loader from '../../Loader';
import { toast } from 'sonner';
import ItemCard from '../ItemCard';

const ItemsList = () => {
    const { data, error, fetchNextPage, status } = useInfiniteQuery({
        getNextPageParam: (lastPage: PokemonAPIResponse) => lastPage.next,
        queryFn: ({ pageParam }) => getItems({ url: pageParam }),
        queryKey: ['items'],
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
            <h1 className="md:text-8xl text-5xl font-bold mb-6">Items</h1>
            <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row  gap-3 w-full">
                {data &&
                    data.pages.map(page => {
                        return page.results.map((item, index) => {
                            return (
                                <div key={item.name}>
                                    {index === page.results.length - 1 ? (
                                        <div ref={ref}>
                                            <ItemCard itemName={item.name} />
                                        </div>
                                    ) : (
                                        <ItemCard itemName={item.name} />
                                    )}
                                </div>
                            );
                        });
                    })}
            </section>
        </>
    );
};

export default ItemsList;
