'use client';

import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';

import Loader from '../../Loader';
import getMoveDetails from '@/app/queries/moves/getMoveDetails';
import Badge from '../../Pokemons/Badge';
import { FlavorTextEntry } from '@/types';

interface IMoveCard {
    moveName: string;
}

const MoveCard = ({ moveName }: IMoveCard) => {
    const { data: move, isLoading } = useQuery({
        queryFn: () => getMoveDetails(moveName),
        queryKey: ['move', moveName],
    });

    const getEnFlavorTextEntry = useMemo(() => {
        if (move) {
            const founded = move.flavor_text_entries.find(
                (entry: FlavorTextEntry) => entry.language.name === 'en',
            );

            if (founded) {
                return founded.flavor_text;
            }

            return '';
        }
    }, [move]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        move && (
            <article className="flex flex-col border border-slate-200 hover:shadow-lg transition-all ease-in-out duration-300 hover:shadow-slate-800 rounded-md p-5 max-w-xs h-full justify-between">
                <section className="flex justify-between">
                    <h2 className="text-2xl capitalize">{move.name}</h2>
                    <Badge type={move.type.name} />
                </section>
                <p className="text-lg">{getEnFlavorTextEntry}</p>
                <section className="font-light border text-lg border-gray-400 rounded-lg p-2">
                    <h3 className="text-xl font-medium">
                        Damage Class: {move.damage_class.name}
                    </h3>
                    <p>Accuracy: {move.accuracy}%</p>
                    <p>PP: {move.pp}</p>
                    <p>Power: {move.power}</p>
                    <p>Priority: {move.priority}</p>
                </section>
            </article>
        )
    );
};

export default MoveCard;
