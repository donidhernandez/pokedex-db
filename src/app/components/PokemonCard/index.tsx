'use client';

import Link from 'next/link';
import Image from 'next/image';
import Badge from '../Badge';
import { Badges } from '@/app/utils/enums';
import { useEffect, useState } from 'react';
import { Pokemon } from '@/types';

interface IPokemonCard {
    pokemonName: string;
}

export default function PokemonCard({ pokemonName }: IPokemonCard) {
    const [pokemon, setPokemon] = useState<Pokemon>();

    async function getPokemon(name: string) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if (!res.ok) {
            throw new Error('Failed to fetch the pokemon data');
        }

        const parseData = await res.json();
        setPokemon(parseData);
    }

    useEffect(() => {
        getPokemon(pokemonName);
    }, []);

    return (
        pokemon && (
            <article className="flex flex-col border border-slate-200 hover:shadow-lg transition-all ease-in-out duration-300 hover:shadow-slate-800 rounded-md p-5 max-w-xs h-full justify-end">
                <Image
                    alt="Charizard"
                    height={300}
                    src={pokemon.sprites.front_default}
                    width={300}
                />
                <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold capitalize">
                        {pokemon.name}
                    </h3>
                    <p className="text-xl font-light">Pokédex: {pokemon.id}</p>
                </div>
                <div className="flex gap-2 mt-3">
                    {pokemon.types.map((type, index) => {
                        return (
                            <Badge
                                key={index}
                                type={type.type.name as Badges}
                            />
                        );
                    })}
                </div>
                <div className="flex gap-2 mt-3">
                    <p>
                        <span className="font-semibold text-lg">Base XP:</span>{' '}
                        <span className="font-light text-lg">267</span>
                    </p>
                    <p>
                        <span className="font-semibold text-lg">Weight:</span>{' '}
                        <span className="font-light text-lg">905kg</span>
                    </p>
                    <p>
                        <span className="font-semibold text-lg">Height:</span>{' '}
                        <span className="font-light text-lg">17 inch</span>
                    </p>
                </div>

                <Link
                    className="bg-red-600 py-3 px-6 w-full text-white flex items-center justify-center text-xl rounded-xl mt-5 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-slate-600"
                    href={`/pokemon/${pokemonName}`}
                >
                    View Details
                </Link>
            </article>
        )
    );
}
